import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  width: 100%;
  height: 64px;

  position: absolute;
  top: 0;
  z-index: 10;
  //background: #1c1c1c;
  background: transparent;

  font-size: 18px;
  font-weight: 500;
  color: #fff;

  & .menus {
    display: flex;
  }
`;

const HeaderContainer = () => {
  return (
    <HeaderWrapper>
      <div className="menus">
        <div>Home</div>
        <div>About</div>
        <div>Projects</div>
        <div>Contact</div>
      </div>
    </HeaderWrapper>
  );
};

export default HeaderContainer;
