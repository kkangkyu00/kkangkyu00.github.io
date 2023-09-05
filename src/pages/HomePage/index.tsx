import React, { useRef } from 'react';
import { Row, Col } from 'antd';
import { motion } from 'framer-motion';
import styled from 'styled-components';

import { ProjectCard } from 'components';
import { useIntersectionObserver } from 'hooks';

import { FullWidthBox } from 'styles';

// import RotatedGrid from '../../components/MouseInteraction/RotatedGrid';

const PageWrapper = styled.div`
  height: 100%;
  color: #fff;
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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Lamp = styled.div`
  position: absolute;
  right: 30vw;
  top: 64px;
  margin: 0px auto;
  width: 100px;

  display: flex;
  flex-direction: column;
  align-items: center;

  .cable {
    width: 4px;
    height: 100px;
    background: #48494e;
  }
  .cover {
    width: 100px;
    height: 55px;
    //clip-path: path('M 0 100 L 0, 50 A 5, 5 0, 0, 1 100, 55 L 0 100 Z');
    -webkit-clip-path: path('M 0 100 L 0, 50 A 5, 5 0, 0, 1 100, 55 L 0 100 Z');
    background: linear-gradient(#37393f, #212328);
    position: relative;
  }

  .in-cover {
    width: 100%;
    height: 20px;
    clip-path: ellipse(50% 50% at 50% 50%);
    background: #212328;
    position: absolute;
    bottom: -10px;
    z-index: 100;
    .bulb {
      width: 30px;
      height: 30px;
      background: red;
      border-radius: 50%;

      box-shadow: inset 0 0 30px 0 #fff, inset 20px 0 30px #ffd400, inset -20px 0 30px white, inset 20px 0 300px #ffffff,
        inset -20px 0 300px #e3ff4b, 0 0 50px #fff, -10px 0 100px #aa8a0e, 10px 0 80px #fff;

      position: absolute;
      left: 0px;
      right: 0px;
      top: -14px;
      margin: 0px auto;
    }
  }
  .light {
    width: 135px;
    border-bottom: 264px solid rgba(100, 100, 100, 0.2);
    border-left: 18px solid transparent;
    border-right: 18px solid transparent;
    position: absolute;
    top: 200px;
    margin: 0px auto;
    z-index: 1;
  }
`;

const BannerWrapper = styled.div`
  width: 100%;
  //max-width: 70vw;
  //margin: 0 auto;
  height: 100vh;
  background: linear-gradient(#181a21, #363a59);
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

  // <Lamp>
  //   <div className="cable" />
  //   <div className="cover" />
  //   <div className="in-cover">
  //     <div className="bulb" />
  //   </div>
  //   <div className="light" />
  // </Lamp>

  return (
    <PageWrapper>
      <BannerWrapper>
        <div>WELCOME</div>
        <div>Portfolio_ | FRONT-END DEVELOPER.</div>
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
