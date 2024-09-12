import React, { Component } from "react";
import BusinessAnalysisImage from "./business_analysis.jpg";

export default class CloudInfraImg extends Component {
  render() {
    const theme = this.props.theme;
    return <img src={BusinessAnalysisImage} />;
  }
}
