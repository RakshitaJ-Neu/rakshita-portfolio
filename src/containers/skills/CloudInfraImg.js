import React, { Component } from "react";
import BusinessAnalysisImage from "./business_analysis.png";

export default class CloudInfraImg extends Component {
  render() {
    const theme = this.props.theme;
    return <img src={BusinessAnalysisImage} />;
  }
}
