import React from 'react';
import { Row, Col } from 'antd';
import styled from 'styled-components';
import * as si from 'react-icons/si';

import { ProjectCard } from 'components';

const Wrapper = styled.div`
  .banner {
    width: 100vw;
    max-width: 60vw;
    height: 200px;
    position: relative;
    margin: 0 auto;
    .banner-content {
      position: absolute;
      bottom: 0;
      ${({ theme }) => theme.typography.title32B};
    }
    .sub-content {
      ${({ theme }) => theme.typography.body18B};
    }
  }
`;

const AboutWrapper = styled.div`
  ${({ theme }) => theme.typography.body18R};
`;

const Section = styled.div`
  width: 100vw;
  max-width: 60vw;
  margin: 0 auto;
  padding-top: 20px;
  padding-bottom: 16px;
`;

const skills = [
  { title: 'React', icon: <si.SiReact />, description: 'Hook, CSS-in-JS 활용' },
  { title: 'JavaScript', icon: <si.SiJavascript />, description: '.' },
  { title: 'Typescript', icon: <si.SiTypescript />, description: '타입 선언 활용' },
  { title: 'JQuery', icon: <si.SiJquery />, description: '.' },
  { title: 'HTML', icon: <si.SiHtml5 />, description: '태그를 활용한 마크업' },
  { title: 'CSS', icon: <si.SiCss3 />, description: '웹 퍼블리싱' },
  { title: 'Styled-Components', icon: <si.SiStyledcomponents />, description: '컴포넌트 커스터마이징' },
  { title: 'Redux', icon: <si.SiRedux />, description: '.' },
  { title: 'React-Query', icon: <si.SiReactquery />, description: 'API 통신을 통한 CRUD 구현' },
  { title: 'Axios', icon: <si.SiAxios />, description: '.' },
  { title: 'Eslint', icon: <si.SiEslint />, description: '개발 환경 설정' },
  { title: 'Datadog', icon: <si.SiDatadog />, description: 'datadog 적용' },
  { title: 'Figma', icon: <si.SiFigma />, description: '디자인 툴' }
];

const AboutPage = () => {
  console.log('############## AboutPage');
  // Passionate about UI/UX. Over 4 years of development experience in HTML, CSS, JS, React and NextJS frameworks.
  return (
    <Wrapper>
      <div className="pentagon" />
      <div className="banner">
        <div className="banner-content">
          <div className="sub-content">결과물로 말하는 프론트엔드 개발자</div>
          <div>강규석에 대해 알아보자!</div>
        </div>
      </div>
      <Section>
        <AboutWrapper>
          <div>항상 좋은 UX/UI에 대해 고민하고 재사용성을 고려해서 개발하고 있습니다.</div>
          <div>새로운 기술을 습득하고 문제의식과 해결을 통해 성장하고 있습니다.</div>
        </AboutWrapper>
      </Section>
      <Section>
        <div>Skills__</div>
        <div>프로젝트를 진행하면서 사용해본 경험이 있는 기술스택입니다.</div>
        <Row gutter={[8, 16]}>
          {skills.map(({ title, icon, description }) => (
            <Col span={6}>
              <ProjectCard title={title} image={icon} description={description} direction="row" />
            </Col>
          ))}
        </Row>
      </Section>
    </Wrapper>
  );
};

export default AboutPage;
