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

const Wrapper = styled.div`
  //.pentagon {
  //  height: 160px;
  //  background-color: #48d8a4;
  //}
  //.pentagon:after {
  //  content: '';
  //  width: 100%;
  //  height: 160px;
  //  position: absolute;
  //  top: 160px;
  //  background-color: #48d8a4;
  //  -webkit-clip-path: polygon(100% 100%, 100% 0, 0 0);
  //  clip-path: polygon(100% 100%, 100% 0, 0 0);
  //}
  .banner {
    width: 100vw;
    max-width: 60vw;
    height: 200px;
    position: relative;
    margin: 0 auto;
  }
  }
  .banner-content {
    position: absolute;
    bottom: 0;
    ${({ theme }) => theme.typography.title32B};
  }
  .sub-content {
    ${({ theme }) => theme.typography.body18B};
  }
  .about {
    ${({ theme }) => theme.typography.body18R};
  }
`;

const Section = styled.div`
  width: 100vw;
  max-width: 60vw;
  margin: 0 auto;
  padding-bottom: 16px;
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
        <div className="about">
          <div>About__</div>
          <div>항상 좋은 UX/UI에 대해 고민하고 재사용성을 고려해서 개발하고 있습니다.</div>
          <div>새로운 기술을 습득하고 문제의식과 해결을 통해 성장하고 있습니다.</div>
        </div>
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
