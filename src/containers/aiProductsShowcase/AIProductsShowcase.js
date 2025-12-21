import React, { Component } from "react";
import "./AIProductsShowcase.css";
import { aiProductsHeader } from "../../portfolio";
import { Fade } from "react-reveal";
import AIProductsShowcaseCard from "../../components/aiProductsShowcaseCard/AIProductsShowcaseCard";

class AIProductsShowcase extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="ai-products-showcase-main">
        <div className="ai-products-showcase-header">
          <Fade bottom duration={1000} distance="20px">
            <h1 className="ai-products-showcase-heading" style={{ color: theme.text }}>
              What I Do?
            </h1>
            <p
              className="subTitle ai-products-showcase-subtitle"
              style={{ color: theme.secondaryText }}
            >
              {aiProductsHeader.description}
            </p>
          </Fade>
        </div>
        <div className="ai-products-showcase-cards-div">
          {this.props.aiProducts.data.slice(0, 3).map((product, index) => {
            return (
              <AIProductsShowcaseCard
                key={product.id}
                product={product}
                theme={theme}
                index={index}
              />
            );
          })}
        </div>
        <Fade bottom duration={1000} distance="20px">
          <div className="ai-products-showcase-button-div">
            <a
              className="general-btn"
              href="/aiproducts"
              style={{
                color: theme.body,
                backgroundColor: theme.text,
                border: `solid 1px ${theme.text}`,
              }}
            >
              View All AI Products
            </a>
          </div>
        </Fade>
      </div>
    );
  }
}

export default AIProductsShowcase;