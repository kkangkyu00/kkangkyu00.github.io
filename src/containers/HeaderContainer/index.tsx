import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { DarkModeButton } from 'components';

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
    height: 100%;
    margin: auto;
  }
  .logo {
    cursor: pointer;
    padding: 0 4px;
    ${({ theme }) => theme.typography.body16B};
    color: ${({ theme }) => theme.defaultColor};
    text-decoration: none;
  }
`;

const HeaderContainer = () => {
  return (
    <HeaderWrapper>
      <div>
        <Link className="logo" to="/">
          kkangkyu00
        </Link>
        <DarkModeButton />
      </div>
    </HeaderWrapper>
  );
};

export default HeaderContainer;
