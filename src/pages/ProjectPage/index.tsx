import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Col, Row } from 'antd';
import { ProjectCard } from 'components';
import styled from 'styled-components';
import { FullWidthBox } from 'styles';
import { useIntersectionObserver } from 'hooks';

export const MarginCenterBox = styled(FullWidthBox)`
  max-width: 60vw;
  margin: 0 auto;
  padding-bottom: 16px;
`;

const projects = [{}, {}, {}, {}, {}, {}];

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
    </div>
  );
};

export default ProjectPage;
