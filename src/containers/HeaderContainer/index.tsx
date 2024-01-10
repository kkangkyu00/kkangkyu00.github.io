import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { DarkModeButton } from 'components';

const HeaderWrapper = styled.div<{ $active?: boolean }>`
  position: fixed;
  top: ${({ $active }) => ($active ? 50 : 0)}px;
  left: 0;
  z-index: 90;
  width: 100%;
  height: 55px;
  ${({ theme }) => theme.typography.body16B};
  transition: top 0.6s ease;

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 62.5%;
    height: 100%;
    margin: auto;
  }
  .logo {
    cursor: pointer;
    padding: 0 4px;
    color: ${({ theme }) => theme.defaultColor};
    text-decoration: none;
  }
`;

interface HeaderContainerProps {
  isActive?: boolean;
}

const HeaderContainer = ({ isActive }: HeaderContainerProps) => {
  console.log(isActive);
  return (
    <HeaderWrapper $active={isActive}>
      <div className="header">
        <Link className="logo" to="/">
          kkangkyu00
        </Link>
        <DarkModeButton />
      </div>
    </HeaderWrapper>
  );
};

export default HeaderContainer;
