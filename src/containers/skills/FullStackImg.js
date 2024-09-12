import React, { Component } from "react";
import FrontendDevImage from "./frontend_dev.png";

export default class FullStackImg extends Component {
  render() {
    const theme = this.props.theme;
    return <img src={FrontendDevImage} />;
  }
}
