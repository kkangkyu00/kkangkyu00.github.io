import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, MenuProps } from 'antd';
import styled from 'styled-components';

import { DarkModeButton } from 'components';

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
    justify-content: space-between;
  }
`;
const MenuWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const StyledMenu = styled(Menu)`
  border: none;
  padding: 0 16px;
  background: transparent;
  ${({ theme }) => theme.typography.body16R};
  color: ${({ theme }) => theme.defaultColor};
  & {
    .ant-menu-item {
      width: 100px;
      text-align: center;
    }
    .ant-menu-item:after {
      display: none;
    }
    .ant-menu-item-active {
      color: ${({ theme }) => theme.defaultColor} !important;
    }
    .ant-menu-item-selected {
      color: inherit !important;
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
  { label: 'GitHub', key: 'asd' }
];

const HeaderContainer = () => {
  const navigate = useNavigate();

  const onClick: MenuProps['onClick'] = ({ key }) => {
    navigate(key);
  };
  return (
    <HeaderWrapper>
      <div>
        <Logo />
        <MenuWrapper>
          <StyledMenu onClick={onClick} mode="horizontal" items={items} />
          <DarkModeButton />
        </MenuWrapper>
      </div>
    </HeaderWrapper>
  );
};

export default HeaderContainer;
