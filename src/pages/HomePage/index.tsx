import React, { useRef } from 'react';
import { Row, Col } from 'antd';
import { motion } from 'framer-motion';
import styled from 'styled-components';

import { ProjectCard } from 'components';
import { useIntersectionObserver } from 'hooks';

import { FullWidthBox } from 'styles';

const PageWrapper = styled.div`
  height: 400px;
  //color: #fff;
  .title {
    font-size: 5vw;
    text-transform: uppercase;
    letter-spacing: 1.5px;
  }
`;

export const MarginCenterBox = styled(FullWidthBox)`
  max-width: 60vw;
  margin: 0 auto;
  padding-bottom: 16px;
`;

const BannerWrapper = styled.div<{ theme: any }>`
  width: 100%;
  //max-width: 70vw;
  //margin: 0 auto;
  height: 100vh;
  background: linear-gradient(#181a21, #363a59);
  // background: ${({ theme }) => theme.defaultOverlay};
`;

const projects = [{}, {}, {}, {}, {}, {}];

const HomePage = () => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(cardRef, { freezeOnceVisible: true });

  const containerStyle = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };
  const itemStyle = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  // const pageWidth = document.documentElement.scrollWidth;
  // const pageHeight = document.documentElement.scrollHeight;
  return (
    <PageWrapper>
      <BannerWrapper>
        <div>
          <div>WELCOME</div>
          <div>Portfolio_ | FRONT-END DEVELOPER.</div>
        </div>
      </BannerWrapper>
      <div style={{ background: '#0e121b' }}>
        <MarginCenterBox ref={cardRef}>
          <div>Projects__</div>
          <motion.div
            variants={containerStyle}
            initial="hidden"
            animate={entry && entry?.isIntersecting ? 'visible' : 'hidden'}
          >
            <Row gutter={[8, 16]}>
              {projects.map((m, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <Col span={8} key={index}>
                  <motion.div variants={itemStyle}>
                    <ProjectCard hoverable />
                  </motion.div>
                </Col>
              ))}
            </Row>
          </motion.div>
        </MarginCenterBox>
        <div>
          <div>Professional</div>
          <div>Experience</div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default HomePage;
