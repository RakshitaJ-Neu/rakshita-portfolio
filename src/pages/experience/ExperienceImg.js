import React, { Component } from "react";
import ExperiencesImage from "./experience.png";

export default class ExperienceImg extends Component {
  render() {
    const theme = this.props.theme;
    return <img src={ExperiencesImage} />;
  }
}
