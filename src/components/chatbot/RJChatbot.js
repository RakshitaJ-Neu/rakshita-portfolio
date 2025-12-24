import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./RJChatbot.css";
import { findBestResponse } from "../../data/chatbotKnowledge";

class RJChatbot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      messages: [
        {
          text: "Hi! I'm Rakshita's AI assistant. I can help you learn about her experience, skills, projects, and background. What would you like to know?",
          isBot: true,
          timestamp: new Date()
        }
      ],
      inputValue: "",
      isTyping: false,
      hasNavigated: false
    };
    this.messagesEndRef = React.createRef();
  }

  toggleChat = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  handleInputChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      this.handleSendMessage();
    }
  };

  scrollToBottom = () => {
    if (this.messagesEndRef.current) {
      this.messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.messages.length !== this.state.messages.length) {
      this.scrollToBottom();
    }
  }

  handleSendMessage = () => {
    const { inputValue, messages } = this.state;
    
    if (inputValue.trim() === "") return;

    // Add user message
    const userMessage = {
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    };

    this.setState({
      messages: [...messages, userMessage],
      inputValue: "",
      isTyping: true
    });

    // Simulate bot thinking and respond
    setTimeout(() => {
      const response = findBestResponse(inputValue);
      
      // Check if response includes navigation
      if (response.navigate) {
        const botMessage = {
          text: response.text,
          isBot: true,
          timestamp: new Date(),
          navigate: response.navigate
        };
        
        this.setState(prevState => ({
          messages: [...prevState.messages, botMessage],
          isTyping: false
        }));
      } else {
        const botMessage = {
          text: response,
          isBot: true,
          timestamp: new Date()
        };
        
        this.setState(prevState => ({
          messages: [...prevState.messages, botMessage],
          isTyping: false
        }));
      }
    }, 800);
  };

  handleQuickQuestion = (question) => {
    this.setState({ inputValue: question }, () => {
      this.handleSendMessage();
    });
  };

  formatMessage = (text) => {
    // Convert markdown-style formatting to HTML
    let formatted = text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\n/g, '<br/>');
    
    return { __html: formatted };
  };

  handleNavigation = (path) => {
    this.props.history.push(path);
    this.setState({ isOpen: false, hasNavigated: true });
  };

  handleResetChat = () => {
    this.setState({
      hasNavigated: false,
      messages: [
        {
          text: "Hi! I'm Rakshita's AI assistant. I can help you learn about her experience, skills, projects, and background. What would you like to know?",
          isBot: true,
          timestamp: new Date()
        }
      ],
      inputValue: "",
      isTyping: false
    });
  };

  render() {
    const { isOpen, messages, inputValue, isTyping, hasNavigated } = this.state;
    const { theme } = this.props;

    const quickQuestions = [
      "Tell me about her experience",
      "What are her skills?",
      "Show me her projects"
    ];

    return (
      <div className="rj-chatbot-container">
        {/* Chat Button */}
        <button
          className={`rj-chat-button ${isOpen ? "open" : ""}`}
          onClick={this.toggleChat}
          aria-label="Ask Rakshita"
          style={{
            backgroundColor: theme.aiPrimary || theme.jacketColor,
          }}
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <div className="rj-button-content">
              {/* AI PM Businesswoman with Robot Icon */}
              <svg
                className="rj-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 80 80"
                fill="none"
              >
                {/* Robot Head with Details */}
                <circle cx="40" cy="28" r="16" fill="currentColor" opacity="0.95"/>
                
                {/* Antenna */}
                <line x1="40" y1="12" x2="40" y2="8" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="40" cy="6" r="2" fill="white">
                  <animate attributeName="opacity" values="0.5;1;0.5" dur="1s" repeatCount="indefinite"/>
                </circle>
                
                {/* Eyes with pupils */}
                <circle cx="34" cy="26" r="3.5" fill="white"/>
                <circle cx="34" cy="26" r="1.5" fill="#1e293b">
                  <animate attributeName="cy" values="26;27;26" dur="3s" repeatCount="indefinite"/>
                </circle>
                <circle cx="46" cy="26" r="3.5" fill="white"/>
                <circle cx="46" cy="26" r="1.5" fill="#1e293b">
                  <animate attributeName="cy" values="26;27;26" dur="3s" repeatCount="indefinite"/>
                </circle>
                
                {/* Eyebrows */}
                <path d="M 31 22 Q 34 20 37 22" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                <path d="M 43 22 Q 46 20 49 22" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                
                {/* Smile */}
                <path d="M 33 33 Q 40 36 47 33" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                
                {/* Cheek blush */}
                <circle cx="29" cy="30" r="2" fill="white" opacity="0.3"/>
                <circle cx="51" cy="30" r="2" fill="white" opacity="0.3"/>
                
                {/* Businesswoman Body */}
                <path d="M 24 44 L 40 44 L 40 64 L 35 64 L 35 58 L 29 58 L 29 64 L 24 64 Z" fill="currentColor" opacity="0.85"/>
                <path d="M 40 44 L 56 44 L 56 64 L 51 64 L 51 58 L 45 58 L 45 64 L 40 64 Z" fill="currentColor" opacity="0.85"/>
                
                {/* Collar/Tie */}
                <path d="M 38 44 L 40 50 L 42 44" fill="white" opacity="0.4"/>
                
                {/* Briefcase */}
                <rect x="32" y="52" width="16" height="10" rx="1.5" fill="white" opacity="0.35"/>
                <rect x="38" y="52" width="4" height="3" fill="currentColor" opacity="0.5"/>
                
                {/* AI Sparkles with Animation */}
                <circle cx="18" cy="24" r="2" fill="white" opacity="0.9">
                  <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite"/>
                  <animate attributeName="r" values="1.5;2.5;1.5" dur="2s" repeatCount="indefinite"/>
                </circle>
                <circle cx="62" cy="24" r="2" fill="white" opacity="0.9">
                  <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite"/>
                  <animate attributeName="r" values="2.5;1.5;2.5" dur="2s" repeatCount="indefinite"/>
                </circle>
                <circle cx="22" cy="40" r="1.5" fill="white" opacity="0.7">
                  <animate attributeName="opacity" values="0.2;0.9;0.2" dur="1.5s" repeatCount="indefinite"/>
                </circle>
                <circle cx="58" cy="40" r="1.5" fill="white" opacity="0.7">
                  <animate attributeName="opacity" values="0.9;0.2;0.9" dur="1.5s" repeatCount="indefinite"/>
                </circle>
                
                {/* Circuit lines */}
                <path d="M 26 28 L 22 28" stroke="white" strokeWidth="1" opacity="0.4"/>
                <path d="M 54 28 L 58 28" stroke="white" strokeWidth="1" opacity="0.4"/>
              </svg>
              <span className="rj-hover-tooltip">Ask Rakshita</span>
            </div>
          )}
        </button>

        {/* Chat Window */}
        {isOpen && (
          <div className="rj-chat-window" style={{
            borderColor: theme.aiPrimary || theme.jacketColor,
          }}>
            {/* Header */}
            <div className="rj-chat-header" style={{
              background: `linear-gradient(135deg, ${theme.aiPrimary || theme.jacketColor} 0%, ${theme.aiSecondary || theme.imageHighlight} 100%)`,
            }}>
              <div className="rj-header-content">
                <div className="rj-avatar">
                  <span className="rj-avatar-text">RJ</span>
                  <span className="rj-status-indicator"></span>
                </div>
                <div className="rj-header-info">
                  <h3>RJBot</h3>
                  <p>AI Assistant • Always Online</p>
                </div>
              </div>
              <button
                className="rj-close-button"
                onClick={this.toggleChat}
                aria-label="Close chat"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            {/* Messages */}
            <div className="rj-chat-messages">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`rj-message ${message.isBot ? "bot" : "user"}`}
                >
                  {message.isBot && (
                    <div className="rj-message-avatar">
                      <span>RJ</span>
                    </div>
                  )}
                  <div
                    className="rj-message-bubble"
                    style={{
                      backgroundColor: message.isBot
                        ? theme.cardBg || "#f8f9fa"
                        : theme.aiPrimary || theme.jacketColor,
                      color: message.isBot ? theme.text : "#ffffff",
                      borderColor: message.isBot ? theme.cardBorder || "#e2e8f0" : "transparent"
                    }}
                  >
                    <div
                      className="rj-message-text"
                      dangerouslySetInnerHTML={this.formatMessage(message.text)}
                    />
                    {message.navigate && (
                      <button
                        className="rj-navigate-button"
                        onClick={() => this.handleNavigation(message.navigate.path)}
                        style={{
                          backgroundColor: theme.aiPrimary || theme.jacketColor,
                        }}
                      >
                        {message.navigate.label} →
                      </button>
                    )}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="rj-message bot">
                  <div className="rj-message-avatar">
                    <span>RJ</span>
                  </div>
                  <div className="rj-message-bubble typing" style={{
                    backgroundColor: theme.cardBg || "#f8f9fa",
                    borderColor: theme.cardBorder || "#e2e8f0"
                  }}>
                    <div className="rj-typing-indicator">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
              )}

              <div ref={this.messagesEndRef} />
            </div>

            {/* Quick Questions */}
            {messages.length === 1 && (
              <div className="rj-quick-questions">
                <p className="rj-quick-title" style={{ color: theme.secondaryText }}>
                  Quick questions:
                </p>
                <div className="rj-quick-buttons">
                  {quickQuestions.map((question, index) => (
                    <button
                      key={index}
                      className="rj-quick-button"
                      onClick={() => this.handleQuickQuestion(question)}
                      style={{
                        borderColor: theme.aiPrimary || theme.jacketColor,
                        color: theme.aiPrimary || theme.jacketColor,
                      }}
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Back Button - Always shows when there are messages beyond initial greeting */}
            {messages.length > 1 && (
              <div className="rj-back-section">
                <button
                  className="rj-back-to-start-button"
                  onClick={this.handleResetChat}
                  style={{
                    backgroundColor: theme.aiPrimary || theme.jacketColor,
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="19" y1="12" x2="5" y2="12"></line>
                    <polyline points="12 19 5 12 12 5"></polyline>
                  </svg>
                  <span>Back to Quick Questions</span>
                </button>
              </div>
            )}

            {/* Input */}
            <div className="rj-chat-input-container" style={{
              borderTopColor: theme.cardBorder || "#e2e8f0"
            }}>
              <textarea
                className="rj-chat-input"
                placeholder="Ask me anything about Rakshita..."
                value={inputValue}
                onChange={this.handleInputChange}
                onKeyPress={this.handleKeyPress}
                rows="1"
                style={{
                  color: theme.text,
                  backgroundColor: theme.cardBg || "#ffffff"
                }}
              />
              <button
                className="rj-send-button"
                onClick={this.handleSendMessage}
                disabled={inputValue.trim() === ""}
                style={{
                  backgroundColor: theme.aiPrimary || theme.jacketColor,
                  opacity: inputValue.trim() === "" ? 0.5 : 1
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </div>

            {/* Footer */}
            <div className="rj-chat-footer" style={{ color: theme.secondaryText }}>
              <p>Powered by AI • Trained on Rakshita's portfolio</p>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(RJChatbot);