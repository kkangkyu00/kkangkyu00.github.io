import React from 'react';
import { Row, Col } from 'antd';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { ProjectCard } from 'components';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Bulb = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  //box-shadow: inset 0 0 30px 0 #fff, inset 20px 0 30px #ffd400, inset -20px 0 30px red, inset 20px 0 300px #ff40d6,
  //  inset -20px 0 300px #e3ff4b, 0 0 50px #fff, -10px 0 100px #fbff00, 10px 0 80px #f55;
  box-shadow: inset 0 0 30px 0 #fff, inset 20px 0 30px #ffd400, inset -20px 0 30px white, inset 20px 0 300px #ffffff,
    inset -20px 0 300px #e3ff4b, 0 0 50px #fff, -10px 0 100px #aa8a0e, 10px 0 80px #fff;
`;

const PageWrapper = styled.div`
  height: 100%;
  color: #fff;
  .title {
    font-size: 5vw;
    text-transform: uppercase;
    letter-spacing: 1.5px;
  }

  .bulb {
    position: relative;
    width: 80px;
    height: 80px;
    background: #444;
    border-radius: 50%;
    z-index: 2;
  }

  .bulb::before {
    content: '';
    position: absolute;
    top: -50px;
    left: 22.5px;
    width: 35px;
    height: 80px;
    background: #444;
    border-top: 30px solid #000;
    border-radius: 10px;
  }

  body.on .bulb::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 120px;
    height: 120px;
    background: #fff;
    border-radius: 50%;
    filter: blur(40px);
  }

  .bulb span:nth-child(1) {
    position: absolute;
    top: -16px;
    left: -4px;
    display: block;
    width: 30px;
    height: 30px;
    background: transparent;
    transform: rotate(342deg);
    border-bottom-right-radius: 40px;
    box-shadow: 20px 20px 0 10px #444;
  }

  body.on .bulb span:nth-child(1) {
    box-shadow: 20px 20px 0 10px #fff;
  }

  .bulb span:nth-child(2) {
    position: absolute;
    top: -16px;
    right: -4px;
    display: block;
    width: 30px;
    height: 30px;
    background: transparent;
    transform: rotate(17deg);
    border-bottom-left-radius: 40px;
    box-shadow: -20px 20px 0 10px #444;
  }
`;

const CardGroup = styled.div`
  width: 100vw;
  max-width: 60vw;
  margin: 0 auto;
  padding-bottom: 16px;
`;

const HomePage = () => {
  const container = {
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
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };
  return (
    <PageWrapper>
      <div style={{ height: 500 }}>
        {/* <div className="title">Hi I&apos;m KyuSeok</div> */}
        <div>FRONT-END DEVELOPER.</div>
        <div className="light">
          <div className="wire" />
          <div className="bulb">
            <span />
            <span />
          </div>
        </div>
      </div>
      <CardGroup>
        <div>Projects__</div>
        <motion.div variants={container} initial="hidden" animate="visible">
          <Row gutter={[8, 16]}>
            {[0, 1, 2, 3, 4, 5].map((index) => (
              <Col span={8}>
                <motion.div key={index} variants={item}>
                  <ProjectCard hoverable />
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
      </CardGroup>
      <div>
        <div>Professional</div>
        <div>Experience</div>
      </div>
    </PageWrapper>
  );
};

export default HomePage;
