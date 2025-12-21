import React, { Component } from "react";
import "./AIProductsShowcaseCard.css";
import { Fade } from "react-reveal";

class AIProductsShowcaseCard extends Component {
  render() {
    const product = this.props.product;
    const theme = this.props.theme;
    const index = this.props.index;

    return (
      <Fade bottom duration={1000} distance="20px" delay={index * 200}>
        <div className="ai-product-showcase-card">
          <div
            className="ai-product-showcase-card-content"
            style={{
              border: `1px solid ${theme.text}`,
              backgroundColor: theme.body,
            }}
          >
            <div className="ai-product-showcase-header">
              <div className="ai-product-showcase-languages">
                {product.languages.map((lang, i) => {
                  return (
                    <div
                      key={i}
                      className="ai-product-language-icon"
                      title={lang.name}
                    >
                      <i
                        className={lang.iconifyClass}
                        style={{ color: theme.text }}
                      ></i>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="ai-product-showcase-body">
              <h3
                className="ai-product-showcase-title"
                style={{ color: theme.text }}
              >
                {product.name}
              </h3>
              <p
                className="ai-product-showcase-description"
                style={{ color: theme.secondaryText }}
              >
                {product.description}
              </p>
            </div>
            <div className="ai-product-showcase-footer">
              <a
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                className="ai-product-showcase-link"
                style={{
                  color: theme.text,
                  border: `1px solid ${theme.text}`,
                }}
              >
                View Details →
              </a>
            </div>
          </div>
        </div>
      </Fade>
    );
  }
}

export default AIProductsShowcaseCard;