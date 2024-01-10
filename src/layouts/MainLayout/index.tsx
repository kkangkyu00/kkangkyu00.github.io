/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { classNames } from 'utils';
import { HeaderContainer, NavContainer } from 'containers';
import { useLocation } from 'react-router-dom';

const LayoutWrapper = styled.div`
  .content {
    width: calc(100% - 110px);
    height: calc(100% - 110px);
    padding: 55px;
  }
  .borders > * {
    position: fixed;
    z-index: 40;
    transition: transform 0.6s ease;
    transform: scale(1);
    background: ${({ theme }) => theme.defaultOverlay};
  }
  .borders.active > * {
    transition: transform 0.6s ease;
    transform: scale(3) !important;
  }
  .top {
    width: 100%;
    height: 55px;
    top: 0;
    left: 0;
  }
  .right {
    width: 55px;
    height: 100%;
    right: 0;
    top: 0;
  }
  .bottom {
    width: 100%;
    height: 55px;
    bottom: 0;
    left: 0;
  }
`;

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const location = useLocation();
  const [isActive, setActive] = useState(false);

  useEffect(() => {
    setActive(false);
  }, [location]);

  const handleClick = (value: boolean) => {
    setActive(value);
  };

  return (
    <LayoutWrapper className="main">
      <HeaderContainer isActive={isActive} />
      <NavContainer onClick={handleClick} />
      <div className="content">{children}</div>
      <div className={classNames('borders', { active: isActive })}>
        <div className="top" />
        <div className="right" />
        <div className="bottom" />
      </div>
    </LayoutWrapper>
  );
};

export default MainLayout;
