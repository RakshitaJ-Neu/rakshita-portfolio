import React, { Component } from "react";
import BusinessAnalysisImage from "./business_analysis.png";
import "./CloudInfraImg.css";

export default class CloudInfraImg extends Component {
  render() {
    return (
      <div className="pm-image-container">
        <img src={BusinessAnalysisImage} alt="Product Management" className="pm-base-image" />
        
        {/* Animated overlay elements positioned over image components */}
        
        {/* Computer screen glow */}
        <div className="screen-glow"></div>
        
        {/* Typing indicator on laptop */}
        <div className="typing-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        {/* Notification badge */}
        <div className="notification-badge">3</div>
        
        {/* Plant leaves animation */}
        <div className="plant-leaf leaf-1"></div>
        <div className="plant-leaf leaf-2"></div>
        
        {/* Floating idea icons */}
        <div className="floating-icon icon-chart">📊</div>
        <div className="floating-icon icon-bulb">💡</div>
        <div className="floating-icon icon-target">🎯</div>
        
        {/* Coffee steam */}
        <div className="steam-line steam-1"></div>
        <div className="steam-line steam-2"></div>
        
        {/* Cursor on screen */}
        <div className="cursor-pointer"></div>
        
        {/* Sparkles around the person */}
        <div className="sparkle sparkle-1">✨</div>
        <div className="sparkle sparkle-2">✨</div>
        <div className="sparkle sparkle-3">✨</div>
      </div>
    );
  }
}
