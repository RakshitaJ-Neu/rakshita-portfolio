import React, { Component } from "react";
import BlogsImage from "./blogs.png";

export default class BlogsImg extends Component {
  render() {
    const theme = this.props.theme;
    return <img src={BlogsImage} />;
  }
}
