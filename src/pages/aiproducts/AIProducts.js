import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import Button from "../../components/button/Button";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import { greeting, aiProductsHeader } from "../../portfolio.js";
import AIProductsData from "../../shared/opensource/ai-products.json";
import "./AIProducts.css";
import AIProductsImg from "./AIProductsImg";

class AIProducts extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="ai-products-main">
        {/* Animated background particles */}
        <div className="ai-particles">
          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
          <div className="particle particle-3"></div>
          <div className="particle particle-4"></div>
          <div className="particle particle-5"></div>
          <div className="particle particle-6"></div>
        </div>
        
        {/* Animated circuit lines */}
        <div className="circuit-lines">
          <div className="circuit-line line-1"></div>
          <div className="circuit-line line-2"></div>
          <div className="circuit-line line-3"></div>
        </div>
        
        <Header theme={theme} />
        <div className="basic-ai-products">
          <Fade bottom duration={2000} distance="40px">
            <div className="ai-products-heading-div">
              <div className="ai-products-heading-img-div">
                <div className="ai-glow-effect"></div>
                <AIProductsImg theme={theme} />
              </div>
              <div className="ai-products-heading-text-div">
                <h1
                  className="ai-products-heading-text"
                  style={{ color: theme.text }}
                >
                  {aiProductsHeader.title}
                </h1>
                <p
                  className="ai-products-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {aiProductsHeader["description"]}
                </p>
              </div>
            </div>
          </Fade>
        </div>
        <div className="repo-cards-div-main">
          {AIProductsData.data.map((repo) => {
            return <GithubRepoCard repo={repo} theme={theme} />;
          })}
        </div>
        <Button
          text={"More AI Projects"}
          className="project-button"
          href="https://github.com/rakshita-jaiswal"
          newTab={true}
          theme={theme}
        />

        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default AIProducts;