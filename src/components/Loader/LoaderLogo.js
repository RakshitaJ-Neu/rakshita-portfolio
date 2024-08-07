import React from "react";
import "./LoaderLogo.css";

class LogoLoader extends React.Component {
  render() {
    const theme = this.props.theme;
    return (
      <h1 className="splash-logo-style">Rakshita Jaiswal</h1>
    );
  }
}

export default LogoLoader;
