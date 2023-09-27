import React from 'react';
import { Row, Col } from 'antd';
import styled from 'styled-components';
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiJquery,
  SiRedux,
  SiReactquery,
  SiAxios,
  SiStyledcomponents,
  SiEslint
} from 'react-icons/si';

import { ProjectCard } from 'components';

const CardGroup = styled.div`
  width: 100vw;
  max-width: 70vw;
  margin: 0 auto;
  padding-bottom: 16px;
`;

const FlexBox = styled.div`
  display: flex;
`;

const Card = styled.div`
  //
`;

const skills = [
  { title: 'React', icon: <SiReact />, description: 'Hook, CSS-in-JS 활용' },
  { title: 'JavaScript', icon: <SiJavascript />, description: '.' },
  { title: 'Typescript', icon: <SiTypescript />, description: '타입 선언, 문법 개발 활용' },
  { title: 'JQuery', icon: <SiJquery />, description: '.' },
  { title: 'HTML', icon: <SiHtml5 />, description: '태그를 활용한 마크업' },
  { title: 'CSS', icon: <SiCss3 />, description: '웹 퍼블리싱' },
  { title: 'Styled-Components', icon: <SiStyledcomponents />, description: '컴포넌트 커스터마이징' },
  { title: 'Redux', icon: <SiRedux />, description: '.' },
  { title: 'React-Query', icon: <SiReactquery />, description: 'API 통신을 통한 CRUD 구현' },
  { title: 'Axios', icon: <SiAxios />, description: '.' },
  { title: 'Eslint', icon: <SiEslint />, description: '개발 환경 설정' }
];

const AboutPage = () => {
  console.log('################ AboutPage');
  // Passionate about UI/UX. Over 4 years of development experience in HTML, CSS, JS, React and NextJS frameworks.
  return (
    <div>
      <CardGroup>
        <div>About__</div>
        {/* <div>안녕하세요. 화면의 결과물로 말하는 프론트엔드 3년차 강규석입니다.</div> */}
        <FlexBox>
          <Card>asdasd</Card>
          <Card>asdasd</Card>
          <Card>asdasd</Card>
          <Card>asdasd</Card>
        </FlexBox>
      </CardGroup>
      <CardGroup>
        <div>Skills__</div>
        {/* <div>프로젝트를 진행하면서 사용해본 경험이 있는 기술스택입니다.</div> */}
        <Row gutter={[8, 16]}>
          {skills.map(({ title, icon, description }) => (
            <Col span={6}>
              <ProjectCard title={title} image={icon} description={description} direction="row" />
            </Col>
          ))}
        </Row>
      </CardGroup>
      <CardGroup>
        <div>Certificate__</div>
        <div>정보처리기능사</div>
      </CardGroup>
    </div>
  );
};

export default AboutPage;
