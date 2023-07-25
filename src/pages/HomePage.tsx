import React from 'react';
import styled from 'styled-components';

const Bulb = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: inset 0 0 30px 0 #fff, inset 20px 0 30px #ffd400, inset -20px 0 30px red, inset 20px 0 300px #ff40d6,
    inset -20px 0 300px #e3ff4b, 0 0 50px #fff, -10px 0 100px #fbff00, 10px 0 80px #f55;
`;

const PageWrapper = styled.div`
  //height: 100%;
  height: 100vh;

  background: linear-gradient(#1c1c1c, #282c34);
  color: #fff;
  .title {
    font-size: 5vw;
    text-transform: uppercase;
    letter-spacing: 1.5px;
  }
`;

const HomePage = () => {
  return (
    <PageWrapper>
      <div>
        <div className="title">Hi I&apos;m KyuSeok</div>
      </div>
      <Bulb />
    </PageWrapper>
  );
};

export default HomePage;
