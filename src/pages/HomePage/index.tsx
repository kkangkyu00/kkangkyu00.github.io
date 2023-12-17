import React from 'react';
import styled from 'styled-components';
import { useTheme } from 'hooks';

const PageWrapper = styled.div`
  height: 400px;
  .title {
    font-size: 5vw;
    text-transform: uppercase;
    letter-spacing: 1.5px;
  }
`;

const BannerWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${() => {
    const theme = localStorage.getItem('theme');
    return theme === 'light' ? '#B0E0E6' : '#131414';
  }};
  & > div {
    z-index: 2;
    font-size: 8em;
    font-weight: 700;
    width: 65%;
  }
  .ss {
    font-size: 18px;
    padding-left: 10px;
  }
  .ground {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
    width: 74%;
    height: 88%;
    background: ${({ theme }) => theme.defaultOverlay};
  }
`;

const IntroWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
  width: 100%;
  height: 100%;
  background: ${() => {
    const theme = localStorage.getItem('theme');
    return theme === 'light' ? 'aliceblue' : '#202124';
  }};
  display: flex;
  justify-content: center;
  align-items: center;
  animation: aa 1s forwards;
  animation-delay: 2s;
  @keyframes aa {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(100%);
    }
  }

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
    animation: H-move 20s ease forwards;
  }
  .stroke-circle {
    stroke-dasharray: 360px;
    stroke-dashoffset: 360px;
    animation: O-move 20s ease forwards;
  }

  @keyframes O-move {
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

  @keyframes H-move {
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
`;

const HomePage = () => {
  // const pageWidth = document.documentElement.scrollWidth;
  // const pageHeight = document.documentElement.scrollHeight;
  const { theme } = useTheme();
  console.log(theme, '#########');
  return (
    <PageWrapper>
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
      <BannerWrapper>
        <div>
          <div>FRONT</div>
          <div>END</div>
          <div>
            <span>DEVELOPER.</span>
            <span className="ss">_Portfolio</span>
          </div>
        </div>
        <div className="ground" />
      </BannerWrapper>
    </PageWrapper>
  );
};

export default HomePage;
