import React from 'react';
import styled from 'styled-components';

import { DarkModeButton } from 'components';

const LogoWrapper = styled.div`
  display: flex;
  padding: 0 16px;
  font-size: 24px;
  & span {
    padding: 0 4px;
    line-height: 18px;
  }
`;

const Logo = () => <LogoWrapper>kkangkyu00</LogoWrapper>;

const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100%;
  height: 55px;
  ${({ theme }) => theme.typography.body18R};
  background: ${({ theme }) => theme.defaultOverlay};

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1100px;
    height: 64px;
    margin: auto;
  }
`;

const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  .gitIcon {
    width: 20px;
    height: 20px;
    margin: auto 16px;
  }
`;

const HeaderContainer = () => {
  return (
    <HeaderWrapper>
      <div>
        <Logo />
        <MenuWrapper>
          <DarkModeButton />
        </MenuWrapper>
      </div>
    </HeaderWrapper>
  );
};

export default HeaderContainer;
