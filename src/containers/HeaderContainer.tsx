import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, MenuProps, Button } from 'antd';
import styled from 'styled-components';

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

const Logo = () => <LogoWrapper>kkangkyu00</LogoWrapper>;

const HeaderWrapper = styled.div`
  width: 100%;
  height: 64px;
  position: sticky;
  top: 0;
  z-index: 10;
  ${({ theme }) => theme.typography.title18R};
  & > div {
    width: 100%;
    max-width: 1100px;
    height: 64px;
    margin: auto;
    display: flex;
    align-items: center;
  }
`;

const MenuWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const StyledMenu = styled(Menu)`
  width: 100%;
  border: none;
  padding: 0 16px;
  background: transparent;
  color: ${({ theme }) => theme.defaultColor};
  & {
    .ant-menu-item:after {
      display: none;
    }
    .ant-menu-item-selected {
      color: ${({ theme }) => theme.defaultColor} !important;
    }
    &:hover:not(.ant-menu-item-active) {
      color: ${({ theme }) => theme.color.gray} !important;
    }
  }
`;

const items: MenuProps['items'] = [
  { label: 'Home', key: '/' },
  { label: 'About', key: '/about' },
  { label: 'Projects', key: '/projects' },
  { label: 'Contact', key: '/contact' }
];

const HeaderContainer = () => {
  const navigate = useNavigate();
  const { theme, onChangeTheme } = useContext(ThemeContext);

  const onClick: MenuProps['onClick'] = ({ key }) => {
    navigate(key);
  };
  return (
    <HeaderWrapper>
      <div>
        <Logo />
        <MenuWrapper>
          <StyledMenu onClick={onClick} mode="horizontal" items={items} />
          <Button onClick={onChangeTheme}>{theme}</Button>
        </MenuWrapper>
      </div>
    </HeaderWrapper>
  );
};

export default HeaderContainer;
