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

  background: linear-gradient(#1c1c1c, #282c34);
  color: #fff;
  .title {
    font-size: 5vw;
    text-transform: uppercase;
    letter-spacing: 1.5px;
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
      </div>
      <CardGroup>
        <div>Projects__</div>
        <motion.div variants={container} initial="hidden" animate="visible">
          <Row gutter={[8, 16]}>
            {[0, 1, 2, 3, 4, 5].map((index) => (
              <Col span={8}>
                <motion.div key={index} variants={item}>
                  <ProjectCard />
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
      <div>
        <div>Skills</div>
        <div>React, JavaScript, Typescript, HTML/CSS</div>
        <div>React-Query... 등등</div>
      </div>
    </PageWrapper>
  );
};

export default HomePage;
