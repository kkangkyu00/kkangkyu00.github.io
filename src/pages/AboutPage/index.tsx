/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Row, Col } from 'antd';
import styled from 'styled-components';
import * as si from 'react-icons/si';

import { ProjectCard } from 'components';

const Wrapper = styled.div`
  height: 100%;
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

  ///
  .about {
    display: flex;
    height: 100%;
  }
  .about-content {
    background: #424a6c;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 70%;
    color: #fff;
    & > div {
      width: 50%;
    }
  }
  .about-ground {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40%;
    ${({ theme }) => theme.typography.title32B};
  }

  /////
  .about-title {
    display: inline-flex;
    align-items: flex-end;
    flex-direction: column;
    font-size: 48px;
    font-weight: 700;
    .description {
      font-size: 14px;
      line-height: 6px;
    }
  }
`;

const AboutWrapper = styled.div`
  ${({ theme }) => theme.typography.body18R};
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
  return (
    <Wrapper>
      <div className="about">
        <div className="about-ground">About</div>
        <div className="about-content">
          <div>
            <div className="about-title">
              <div className="description">who am i</div>
              <div>Hello.</div>
            </div>
            <div>항상 좋은 UX/UI에 대해 고민하고 재사용성을 고려해서 개발하고 있습니다.</div>
            <div>새로운 기술을 습득하고 문제의식과 해결을 통해 성장하고 있습니다.</div>
          </div>
        </div>
      </div>
      {/* skills */}
      <div>SKILL</div>
      <Row>
        <Col>
          <div>Basics</div>
        </Col>
        <div>Frameworks</div>
        <div>Libraries</div>
        <div>Tools</div>
      </Row>
    </Wrapper>
  );
};

export default AboutPage;
