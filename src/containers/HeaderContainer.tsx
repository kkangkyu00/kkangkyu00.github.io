import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, MenuProps, Button } from 'antd';
import styled from 'styled-components';
import { RiComputerLine, RiCupLine, RiCodeSSlashLine } from 'react-icons/ri';
// import { BiCoffee } from 'react-icons/bi';

import { ThemeContext } from '../contexts/ThemeContext';

const LogoWrapper = styled.div`
  display: flex;
  padding: 0 16px;
  font-size: 24px;
  & span {
    line-height: 18px;
    padding: 0 4px;
  }
`;

const Logo = () => (
  <LogoWrapper>
    <RiComputerLine />
    <span>+</span>
    <RiCupLine />
    <span>=</span>
    <RiCodeSSlashLine />
  </LogoWrapper>
);

const HeaderWrapper = styled.div`
  width: 100%;
  height: 64px;
  z-index: 10;
  font-size: 18px;
  font-weight: 500;
  color: #f6f7f8;
  & .menu {
    width: 60vw;
    height: 100%;
    margin: auto;
    border: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const StyledMenu = styled(Menu)`
  width: 100%;
  //color: #f6f7f8;
  //justify-content: end;
  background: transparent;
  border: none;
  padding: 0 16px;
  & {
    .ant-menu-item:after {
      display: none;
    }
    //.ant-menu-item:hover ~ .ant-menu-item:not(.antd-menu-item-active) {
    //  color: rgba(255, 255, 255, 0.3);
    //}
    .ant-menu-item:not(.ant-menu-item-selected):not(.ant-menu-selected):hover {
      color: #f6f7f8;
    }
  }
  && .ant-menu-item-selected {
    color: #f6f7f8;
  }
`;

const items: MenuProps['items'] = [
  { label: 'Home', key: '/' },
  { label: 'About', key: '/about' },
  { label: 'Projects', key: '/projects' },
  { label: 'Contact', key: '/contact' }
];

const HeaderContainer = () => {
  const { theme, onChangeTheme } = useContext(ThemeContext);

  const navigate = useNavigate();
  const onClick: MenuProps['onClick'] = ({ key }) => {
    navigate(key);
  };

  return (
    <HeaderWrapper>
      <div className="menu">
        <Button onClick={onChangeTheme}>{theme}</Button>
        <Logo />
        <StyledMenu onClick={onClick} mode="horizontal" items={items} />
      </div>
    </HeaderWrapper>
  );
};

export default HeaderContainer;
