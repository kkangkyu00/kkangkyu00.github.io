import React from 'react';
import { Row, Col } from 'antd';
import styled from 'styled-components';

import { ProjectCard } from 'components';

import reactIcon from 'images/ic_react.svg';

const CardGroup = styled.div`
  width: 100vw;
  max-width: 60vw;
  margin: 0 auto;
  padding-bottom: 16px;
`;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const skills = [
  { type: 'React', icon: reactIcon },
  { type: 'JavaScript', icon: '' },
  { type: 'Typescript', icon: '' },
  { type: 'HTML', icon: '' },
  { type: 'CSS', icon: '' },
  { type: 'JQuery', icon: '' },
  { type: 'Redux', icon: '' },
  { type: 'React-Query', icon: '' }
];

const AboutPage = () => {
  return (
    <div>
      <div>about</div>
      <div>
        {/* <div>프로젝트를 진행하면서 사용해본 경험이 있는 기술스택입니다.</div> */}
        <CardGroup>
          <Row gutter={[8, 16]}>
            {skills.map(({ type, icon }) => (
              <Col span={6}>
                <ProjectCard title={type} image={icon} direction="row" />
              </Col>
            ))}
          </Row>
        </CardGroup>
      </div>
    </div>
  );
};

export default AboutPage;
