import React, { Component } from "react";
import "./TestimonialsCarousel.css";

class TestimonialsCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
    };
    this.intervalId = null;
  }

  componentDidMount() {
    this.startAutoPlay();
  }

  componentWillUnmount() {
    this.stopAutoPlay();
  }

  startAutoPlay = () => {
    this.intervalId = setInterval(() => {
      this.nextTestimonial();
    }, 5000); // Change testimonial every 5 seconds
  };

  stopAutoPlay = () => {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  };

  nextTestimonial = () => {
    const { testimonials } = this.props;
    this.setState((prevState) => ({
      currentIndex: (prevState.currentIndex + 1) % testimonials.length,
    }));
  };

  prevTestimonial = () => {
    const { testimonials } = this.props;
    this.setState((prevState) => ({
      currentIndex:
        prevState.currentIndex === 0
          ? testimonials.length - 1
          : prevState.currentIndex - 1,
    }));
  };

  goToTestimonial = (index) => {
    this.setState({ currentIndex: index });
  };

  render() {
    const { testimonials, theme } = this.props;
    const { currentIndex } = this.state;
    const currentTestimonial = testimonials[currentIndex];

    return (
      <div className="testimonials-carousel">
        <div
          className="testimonial-card"
          style={{
            backgroundColor: theme.body,
            border: `2px solid ${theme.text}20`,
          }}
        >
          <div className="quote-icon" style={{ color: theme.text }}>
            "
          </div>
          <p
            className="testimonial-text"
            style={{ color: theme.secondaryText }}
          >
            {currentTestimonial.text}
          </p>
          <div className="testimonial-author">
            <h4 className="author-name" style={{ color: theme.text }}>
              {currentTestimonial.name}
            </h4>
            <p className="author-role" style={{ color: theme.secondaryText }}>
              {currentTestimonial.role} at {currentTestimonial.company}
            </p>
            <div className="rating">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <span key={i} className="star" style={{ color: theme.text }}>
                  ★
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="carousel-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => this.goToTestimonial(index)}
              style={{
                backgroundColor:
                  index === currentIndex ? theme.text : `${theme.text}30`,
              }}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default TestimonialsCarousel;