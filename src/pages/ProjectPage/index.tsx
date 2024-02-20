import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Col, Row } from 'antd';
import { ProjectCard } from 'components';
import styled from 'styled-components';
import { FullWidthBox } from 'styles';
import { useIntersectionObserver } from 'hooks';
import testImg from 'components/Card/img_1.png';

export const MarginCenterBox = styled(FullWidthBox)`
  max-width: 60vw;
  margin: 0 auto;
  padding-bottom: 16px;
`;

const projects = [
  {
    title: 'Test',
    image: testImg,
    description: 'description1 descriptio2'
  }
];

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

const ProjectPage = () => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(cardRef, { freezeOnceVisible: true });

  const handleCardClick = (event: any) => {
    console.log(event, '##############');
  };
  // 프로젝트에 투입되어 작업하거나, 개인 프로젝트로 제작한 프로젝트 모음집입니다.
  return (
    <div>
      <MarginCenterBox ref={cardRef}>
        <div>Projects__</div>
        <motion.div
          variants={containerStyle}
          initial="hidden"
          animate={entry && entry?.isIntersecting ? 'visible' : 'hidden'}
        >
          <Row gutter={[8, 16]}>
            {projects.map((project) => (
              <Col span={8}>
                <motion.div variants={itemStyle}>
                  <ProjectCard onTabChange={handleCardClick} {...project} hoverable />
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
      </MarginCenterBox>
    </div>
  );
};

export default ProjectPage;
