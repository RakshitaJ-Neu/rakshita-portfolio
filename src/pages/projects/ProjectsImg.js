import React, { Component } from "react";
import ProjectsImage from "./projects_image.png";

export default class ProjectsImg extends Component {
  render() {
    const theme = this.props.theme;
    return <img src={ProjectsImage} />;
  }
}
