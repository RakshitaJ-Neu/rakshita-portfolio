import React, { Component } from "react";

export default class AIProductsImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 1074 584"
      >
        <title>AI Products</title>
        <ellipse cx="537" cy="549" rx="527" ry="35" fill="#e6e6e6" />
        
        {/* AI Brain/Network representation */}
        <circle cx="537" cy="300" r="120" fill={theme.imageHighlight} opacity="0.2" />
        <circle cx="537" cy="300" r="80" fill={theme.imageHighlight} opacity="0.3" />
        <circle cx="537" cy="300" r="40" fill={theme.imageHighlight} />
        
        {/* Neural network nodes */}
        <circle cx="400" cy="250" r="15" fill={theme.text} />
        <circle cx="450" cy="200" r="15" fill={theme.text} />
        <circle cx="500" cy="180" r="15" fill={theme.text} />
        <circle cx="574" cy="180" r="15" fill={theme.text} />
        <circle cx="624" cy="200" r="15" fill={theme.text} />
        <circle cx="674" cy="250" r="15" fill={theme.text} />
        
        <circle cx="400" cy="350" r="15" fill={theme.text} />
        <circle cx="450" cy="400" r="15" fill={theme.text} />
        <circle cx="500" cy="420" r="15" fill={theme.text} />
        <circle cx="574" cy="420" r="15" fill={theme.text} />
        <circle cx="624" cy="400" r="15" fill={theme.text} />
        <circle cx="674" cy="350" r="15" fill={theme.text} />
        
        {/* Connection lines */}
        <line x1="400" y1="250" x2="537" y2="300" stroke={theme.imageHighlight} strokeWidth="2" opacity="0.5" />
        <line x1="450" y1="200" x2="537" y2="300" stroke={theme.imageHighlight} strokeWidth="2" opacity="0.5" />
        <line x1="500" y1="180" x2="537" y2="300" stroke={theme.imageHighlight} strokeWidth="2" opacity="0.5" />
        <line x1="574" y1="180" x2="537" y2="300" stroke={theme.imageHighlight} strokeWidth="2" opacity="0.5" />
        <line x1="624" y1="200" x2="537" y2="300" stroke={theme.imageHighlight} strokeWidth="2" opacity="0.5" />
        <line x1="674" y1="250" x2="537" y2="300" stroke={theme.imageHighlight} strokeWidth="2" opacity="0.5" />
        
        <line x1="400" y1="350" x2="537" y2="300" stroke={theme.imageHighlight} strokeWidth="2" opacity="0.5" />
        <line x1="450" y1="400" x2="537" y2="300" stroke={theme.imageHighlight} strokeWidth="2" opacity="0.5" />
        <line x1="500" y1="420" x2="537" y2="300" stroke={theme.imageHighlight} strokeWidth="2" opacity="0.5" />
        <line x1="574" y1="420" x2="537" y2="300" stroke={theme.imageHighlight} strokeWidth="2" opacity="0.5" />
        <line x1="624" y1="400" x2="537" y2="300" stroke={theme.imageHighlight} strokeWidth="2" opacity="0.5" />
        <line x1="674" y1="350" x2="537" y2="300" stroke={theme.imageHighlight} strokeWidth="2" opacity="0.5" />
        
        {/* Data visualization elements */}
        <rect x="200" y="150" width="100" height="80" rx="5" fill={theme.imageHighlight} opacity="0.3" />
        <rect x="774" y="150" width="100" height="80" rx="5" fill={theme.imageHighlight} opacity="0.3" />
        <rect x="200" y="370" width="100" height="80" rx="5" fill={theme.imageHighlight} opacity="0.3" />
        <rect x="774" y="370" width="100" height="80" rx="5" fill={theme.imageHighlight} opacity="0.3" />
      </svg>
    );
  }
}