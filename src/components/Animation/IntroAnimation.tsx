import React from 'react';
import styled from 'styled-components';

const IntroWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: ${() => {
    const theme = localStorage.getItem('theme');
    return theme === 'light' ? 'aliceblue' : '#202124';
  }};
  animation: intro-delay 1s forwards;
  animation-delay: 2s;

  svg line,
  svg circle {
    fill: none;
    stroke: ${() => {
      const theme = localStorage.getItem('theme');
      return theme === 'light' ? '#000' : 'aliceblue';
    }};
    stroke-width: 34px;
  }
  .stroke-line {
    stroke-dasharray: 127px;
    stroke-dashoffset: 127px;
    animation: line-move 20s ease forwards;
  }
  .stroke-circle {
    stroke-dasharray: 360px;
    stroke-dashoffset: 360px;
    animation: circle-move 20s ease forwards;
  }

  @keyframes line-move {
    0% {
      stroke-dashoffset: 127px;
    }
    5% {
      stroke-dashoffset: 0px;
    }
    100% {
      stroke-dashoffset: 0px;
    }
  }
  @keyframes circle-move {
    0% {
      stroke-dashoffset: 360px;
    }
    5% {
      stroke-dashoffset: 0px;
    }
    100% {
      stroke-dashoffset: 0px;
    }
  }
  @keyframes intro-delay {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(100%);
    }
  }
`;

const IntroAnimation = () => {
  return (
    <IntroWrapper id="intro">
      <svg xmlns="http://www.w3.org/2000/svg" width="428" height="280" viewBox="0 0 428 280">
        <g id="H-letter">
          <line className="stroke-line" x1="17" y1="0" x2="17" y2="124" />
          <line className="stroke-line" x1="33" y1="62" x2="68" y2="62" style={{ animationDelay: '0.4s' }} />
          <line className="stroke-line" x1="84" y1="0" x2="84" y2="124" style={{ animationDelay: '0.6s' }} />
        </g>
        <g id="E-letter">
          <line className="stroke-line" x1="138" y1="0" x2="138" y2="124" style={{ animationDelay: '0.2s' }} />
          <line className="stroke-line" x1="154" y1="17" x2="201" y2="17" style={{ animationDelay: '0.4s' }} />
          <line className="stroke-line" x1="154" y1="62" x2="201" y2="62" style={{ animationDelay: '0.6s' }} />
          <line className="stroke-line" x1="154" y1="107" x2="201" y2="107" style={{ animationDelay: '0.9s' }} />
        </g>
        <g id="L-letter">
          <line className="stroke-line" x1="17" y1="150" x2="17" y2="274" style={{ animationDelay: '0.5s' }} />
          <line className="stroke-line" x1="33" y1="257" x2="80" y2="257" style={{ animationDelay: '1.2s' }} />
        </g>
        <g id="L-letter">
          <line className="stroke-line" x1="110" y1="150" x2="110" y2="274" style={{ animationDelay: '0.6s' }} />
          <line className="stroke-line" x1="126" y1="257" x2="174" y2="257" style={{ animationDelay: '1.3s' }} />
        </g>
        <g id="O-letter">
          <circle className="stroke-circle" cx="260" cy="208" r="54" style={{ animationDelay: '0.6s' }} />
        </g>
      </svg>
    </IntroWrapper>
  );
};

export default IntroAnimation;
