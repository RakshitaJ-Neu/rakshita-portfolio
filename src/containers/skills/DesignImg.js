import React, { Component } from "react";
import ProjectManagementImage from "./project_management.png";

export default class DesignImg extends Component {
  render() {
    const theme = this.props.theme;
    return <img src={ProjectManagementImage} />;
  }
}
