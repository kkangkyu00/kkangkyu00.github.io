import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, MenuProps } from 'antd';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  width: 100%;
  height: 64px;
  z-index: 10;
  font-size: 18px;
  font-weight: 500;
  color: #fff;
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
  color: #fff;
  justify-content: end;
  background: transparent;
  & {
    .ant-menu-item:after {
      display: none;
    }
    .ant-menu-item-active,
    .ant-menu-item-selected {
      color: #fff !important;
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
  const onClick: MenuProps['onClick'] = ({ key }) => {
    navigate(key);
  };

  return (
    <HeaderWrapper>
      <div className="menu">
        <div>K</div>
        <StyledMenu onClick={onClick} mode="horizontal" items={items} />
      </div>
    </HeaderWrapper>
  );
};

export default HeaderContainer;
