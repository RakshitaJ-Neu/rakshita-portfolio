import React, { Component } from "react";
import ProjectsImage from "./projects_image.png";

export default class ProjectsImg extends Component {
  render() {
    return <img src={ProjectsImage} alt="Projects" />;
  }
}
