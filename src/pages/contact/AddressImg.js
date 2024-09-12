import React, { Component } from "react";
import AddressImage from "./mail_address.png";

export default class AddressImg extends Component {
  render() {
    const theme = this.props.theme;
    return <img src={AddressImage} />;
  }
}
