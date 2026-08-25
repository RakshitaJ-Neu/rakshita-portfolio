import React, { Component } from "react";
import "./ProductManagement.css";

export default class ProductManagementImg extends Component {
  render() {
    return (
      <div className="pm-svg-container">
        <svg
          viewBox="0 0 800 600"
          xmlns="http://www.w3.org/2000/svg"
          className="pm-animated-svg"
        >
          {/* Desk */}
          <rect x="100" y="400" width="600" height="20" fill="#8B4513" className="desk" />
          <rect x="120" y="420" width="20" height="150" fill="#654321" />
          <rect x="660" y="420" width="20" height="150" fill="#654321" />
          
          {/* Computer Monitor */}
          <rect x="300" y="250" width="250" height="180" fill="#2C3E50" rx="5" className="monitor" />
          <rect x="315" y="265" width="220" height="140" fill="#3498DB" className="screen">
            <animate attributeName="fill" values="#3498DB;#5DADE2;#3498DB" dur="3s" repeatCount="indefinite" />
          </rect>
          
          {/* Screen Content - Charts */}
          <rect x="330" y="280" width="80" height="60" fill="#E74C3C" opacity="0.8" className="chart-bar">
            <animate attributeName="height" values="60;80;60" dur="2s" repeatCount="indefinite" />
            <animate attributeName="y" values="280;260;280" dur="2s" repeatCount="indefinite" />
          </rect>
          <rect x="420" y="290" width="80" height="50" fill="#F39C12" opacity="0.8" className="chart-bar">
            <animate attributeName="height" values="50;70;50" dur="2.5s" repeatCount="indefinite" />
            <animate attributeName="y" values="290;270;290" dur="2.5s" repeatCount="indefinite" />
          </rect>
          <rect x="510" y="300" width="80" height="40" fill="#2ECC71" opacity="0.8" className="chart-bar">
            <animate attributeName="height" values="40;65;40" dur="2.2s" repeatCount="indefinite" />
            <animate attributeName="y" values="300;275;300" dur="2.2s" repeatCount="indefinite" />
          </rect>
          
          {/* Monitor Stand */}
          <rect x="395" y="430" width="60" height="10" fill="#34495E" />
          <rect x="410" y="410" width="30" height="20" fill="#34495E" />
          
          {/* Laptop */}
          <rect x="450" y="380" width="180" height="120" fill="#95A5A6" rx="3" className="laptop">
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="0 540 440;-2 540 440;0 540 440"
              dur="4s"
              repeatCount="indefinite"
            />
          </rect>
          <rect x="460" y="390" width="160" height="100" fill="#2C3E50" />
          <rect x="470" y="400" width="140" height="75" fill="#52C1E8" className="laptop-screen">
            <animate attributeName="fill" values="#52C1E8;#7DD3F0;#52C1E8" dur="2.5s" repeatCount="indefinite" />
          </rect>
          
          {/* Coffee Cup */}
          <ellipse cx="220" cy="390" rx="25" ry="8" fill="#8B4513" />
          <rect x="195" y="360" width="50" height="30" fill="#D2691E" rx="5" className="coffee-cup">
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0;0 -3;0 0"
              dur="3s"
              repeatCount="indefinite"
            />
          </rect>
          <path d="M 245 370 Q 260 370 260 380" stroke="#8B4513" strokeWidth="3" fill="none" />
          
          {/* Steam from coffee */}
          <path d="M 210 350 Q 215 340 210 330" stroke="#B0B0B0" strokeWidth="2" fill="none" opacity="0.6" className="steam">
            <animate attributeName="opacity" values="0.6;0.2;0.6" dur="2s" repeatCount="indefinite" />
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0;-2 -10;0 0"
              dur="2s"
              repeatCount="indefinite"
            />
          </path>
          <path d="M 220 350 Q 225 340 220 330" stroke="#B0B0B0" strokeWidth="2" fill="none" opacity="0.6" className="steam">
            <animate attributeName="opacity" values="0.6;0.2;0.6" dur="2.3s" repeatCount="indefinite" />
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0;2 -10;0 0"
              dur="2.3s"
              repeatCount="indefinite"
            />
          </path>
          
          {/* Notebook */}
          <rect x="580" y="360" width="100" height="130" fill="#E8E8E8" rx="2" className="notebook">
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="0 630 425;-1 630 425;0 630 425"
              dur="5s"
              repeatCount="indefinite"
            />
          </rect>
          <line x1="590" y1="380" x2="670" y2="380" stroke="#3498DB" strokeWidth="2" />
          <line x1="590" y1="400" x2="670" y2="400" stroke="#3498DB" strokeWidth="2" />
          <line x1="590" y1="420" x2="670" y2="420" stroke="#3498DB" strokeWidth="2" />
          
          {/* Pen */}
          <rect x="665" y="440" width="8" height="60" fill="#E74C3C" rx="2" className="pen">
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="0 669 470;5 669 470;0 669 470"
              dur="3s"
              repeatCount="indefinite"
            />
          </rect>
          
          {/* Person - Head */}
          <circle cx="200" cy="280" r="40" fill="#FDBCB4" className="head">
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0;0 -2;0 0"
              dur="3s"
              repeatCount="indefinite"
            />
          </circle>
          
          {/* Hair */}
          <path d="M 160 270 Q 200 240 240 270" fill="#2C3E50" />
          <ellipse cx="200" cy="260" rx="45" ry="30" fill="#2C3E50" />
          
          {/* Eyes */}
          <circle cx="190" cy="280" r="3" fill="#2C3E50" className="eye">
            <animate attributeName="r" values="3;1;3" dur="4s" repeatCount="indefinite" />
          </circle>
          <circle cx="210" cy="280" r="3" fill="#2C3E50" className="eye">
            <animate attributeName="r" values="3;1;3" dur="4s" repeatCount="indefinite" />
          </circle>
          
          {/* Smile */}
          <path d="M 190 295 Q 200 300 210 295" stroke="#2C3E50" strokeWidth="2" fill="none" />
          
          {/* Body */}
          <rect x="160" y="320" width="80" height="100" fill="#9B59B6" rx="10" className="body">
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0;0 -2;0 0"
              dur="3s"
              repeatCount="indefinite"
            />
          </rect>
          
          {/* Arms */}
          <rect x="140" y="340" width="20" height="70" fill="#FDBCB4" rx="10" className="arm-left">
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="0 150 340;-10 150 340;0 150 340"
              dur="3s"
              repeatCount="indefinite"
            />
          </rect>
          <rect x="240" y="340" width="20" height="70" fill="#FDBCB4" rx="10" className="arm-right">
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="0 250 340;10 250 340;0 250 340"
              dur="3s"
              repeatCount="indefinite"
            />
          </rect>
          
          {/* Hand on mouse */}
          <ellipse cx="270" cy="410" rx="15" ry="12" fill="#FDBCB4" className="hand">
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0;2 1;0 0"
              dur="2s"
              repeatCount="indefinite"
            />
          </ellipse>
          
          {/* Mouse */}
          <ellipse cx="280" cy="415" rx="12" ry="18" fill="#95A5A6" className="mouse">
            <animateTransform
              attributeName="transform"
              type="scale"
              values="1 1;0.95 0.95;1 1"
              dur="2s"
              repeatCount="indefinite"
            />
          </ellipse>
          <line x1="280" y1="405" x2="280" y2="425" stroke="#7F8C8D" strokeWidth="1" />
          
          {/* Floating icons around */}
          <g className="floating-icon icon-1">
            <circle cx="650" cy="150" r="25" fill="#3498DB" opacity="0.3">
              <animate attributeName="cy" values="150;140;150" dur="3s" repeatCount="indefinite" />
            </circle>
            <text x="638" y="160" fontSize="20" fill="#FFF" aria-hidden="true">📊</text>
          </g>
          
          <g className="floating-icon icon-2">
            <circle cx="150" cy="120" r="25" fill="#E74C3C" opacity="0.3">
              <animate attributeName="cy" values="120;110;120" dur="3.5s" repeatCount="indefinite" />
            </circle>
            <text x="138" y="130" fontSize="20" fill="#FFF" aria-hidden="true">💡</text>
          </g>
          
          <g className="floating-icon icon-3">
            <circle cx="700" cy="300" r="25" fill="#2ECC71" opacity="0.3">
              <animate attributeName="cy" values="300;290;300" dur="2.8s" repeatCount="indefinite" />
            </circle>
            <text x="688" y="310" fontSize="20" fill="#FFF" aria-hidden="true">🎯</text>
          </g>
          
          {/* Notification badge */}
          <circle cx="530" cy="270" r="12" fill="#E74C3C" className="notification">
            <animate attributeName="r" values="12;14;12" dur="1s" repeatCount="indefinite" />
          </circle>
          <text x="525" y="275" fontSize="12" fill="#FFF" fontWeight="bold">3</text>
        </svg>
      </div>
    );
  }
}