import React from 'react';
// import { Row, Col } from 'antd';
// import { motion } from 'framer-motion';
import styled from 'styled-components';

// import { ProjectCard } from 'components';
// import { useIntersectionObserver } from 'hooks';
//
// import { FullWidthBox } from 'styles';

const PageWrapper = styled.div`
  height: 400px;
  //color: #fff;
  .title {
    font-size: 5vw;
    text-transform: uppercase;
    letter-spacing: 1.5px;
  }
`;

const BannerWrapper = styled.div<{ theme: any }>`
  width: 100%;
  //max-width: 70vw;
  //margin: 0 auto;
  height: 100vh;
  //background: linear-gradient(#181a21, #363a59);
  // background: ${({ theme }) => theme.defaultOverlay};
`;

const HomePage = () => {
  // const pageWidth = document.documentElement.scrollWidth;
  // const pageHeight = document.documentElement.scrollHeight;
  // style={{ background: '#0e121b' }}
  return (
    <PageWrapper>
      <BannerWrapper>
        <div>
          <div>WELCOME</div>
          <div>Portfolio_ | FRONT-END DEVELOPER.</div>
        </div>
      </BannerWrapper>
      <div>
        <div>
          <div>Professional</div>
          <div>Experience</div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default HomePage;
