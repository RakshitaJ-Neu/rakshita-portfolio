import React, { Component } from "react";
import DataScienceImage from "./data_science.jpg";

export default class DataScienceImg extends Component {
  render() {
    const theme = this.props.theme;
    return <img src={DataScienceImage} />;
  }
}
