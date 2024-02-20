import React from 'react';
import styled from 'styled-components';
import { IntroAnimation } from 'components';

const Wrapper = styled.div`
  position: relative;
  overflow-x: hidden;
  width: 100%;
  height: 100%;
`;

const PageWrapper = styled.div`
  //display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  //height: calc(100vh - 110px);
  background: ${() => {
    const theme = localStorage.getItem('theme');
    return theme === 'light' ? '#B0E0E6' : '#131414';
  }};

  & > div {
    z-index: 2;
    font-size: 8em;
    font-weight: 800;
    width: 65%;
  }

  .ss {
    font-size: 18px;
    padding-left: 10px;
  }

  .ground {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
    width: 70%;
    height: 100%;
    background: #eff1f5;
  }
`;

const HomePage = () => {
  return (
    <Wrapper>
      <IntroAnimation />
      <PageWrapper>
        {/* <div> */}
        {/*  <div>FRONT</div> */}
        {/*  <div>END</div> */}
        {/*  <div> */}
        {/*    <span>DEVELOPER.</span> */}
        {/*    <span className="ss">_Portfolio</span> */}
        {/*  </div> */}
        {/* </div> */}
      </PageWrapper>
    </Wrapper>
  );
};

export default HomePage;
