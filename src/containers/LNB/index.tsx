import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import styled from 'styled-components';

const MenuContainer = styled.div`
  position: fixed;
  left: 55px;
  z-index: 80;
  background: ${({ theme }) => theme.defaultOverlay};
  width: 70%;
  height: 100%;
  padding-left: 50px;
  transition: transform 0.6s ease;

  .nav-container {
    position: relative;
    display: inline-flex;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  .nav-title {
    position: absolute;
    top: 65px;
    left: calc(16vw - 60px);
    ${({ theme }) => theme.typography.body16B};
  }
  .menu-nav {
    display: flex;
    flex-direction: column;
    padding-left: calc(16vw - 60px);
    margin-bottom: 100px;
    list-style: none;
  }
  .menu-nav a {
    ${({ theme }) => theme.typography.title32B};
    font-weight: 900;
    color: inherit;
    text-decoration: none;
    position: relative;
    padding: 0 10px;
    &:before {
      content: '';
      display: block;
      position: absolute;
      top: 50%;
      left: 0px;
      right: 0px;
      height: 15px;
      z-index: -1;
      opacity: 0.5;
      background: #ff5851;
      transform: scaleX(0) translateY(-50%);
      transform-origin: left center;
      transition: transform 400ms cubic-bezier(1, 0, 0, 1) 0ms;
    }
  }
  .nav-footer {
    position: absolute;
    bottom: 120px;
    left: calc(16vw - 60px);
    font-size: 12px;
  }

  .nav-open .menu-nav li a {
    display: inline-block;
    transform: translateY(0%);
  }

  .menu-nav li {
    background: #202124;
    overflow: hidden;
    a {
      display: inline-block;
      transform: translateY(100%);
      transition: transform 800ms cubic-bezier(1, 0, 0, 1) 0ms;
      //transition: all 0.3s ease;
    }
  }

  .menu-nav .active a,
  .menu-nav a:hover {
    &:before {
      transform: scaleX(1) translateY(-50%);
      transform-origin: left center;
      background: #ff5851;
    }
  }
`;
const StyledButton = styled.div<{ $open: boolean }>`
  position: fixed;
  z-index: 90;
  top: 50%;
  left: 25px;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  height: 40px;
  cursor: pointer;
  pointer-events: all;

  .menu {
    width: 40px;
  }
  .line {
    display: block;
    float: right;
    clear: right;
    height: 2px;
    background: ${({ theme }) => theme.defaultColor};
  }
  .menu .line:nth-child(1) {
    width: 16px;
  }
  .menu .line:nth-child(2) {
    width: 20px;
    margin-top: 3px;
  }
  .menu .line:nth-child(3) {
    width: 12px;
    margin-top: 3px;
  }
  .menu-btn-txt {
    transform: rotate(-90deg);
    padding-top: 20px;
    font-size: 10px;
  }
`;

interface LNBButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

const topVariants = {
  hover: { width: 20 },
  closed: { rotate: 0, translateY: 0, translateX: 0 },
  opened: { width: 20, rotate: 45, translateY: 3.5, translateX: -1.5 }
};
const centerVariants = {
  hover: { width: 32 },
  closed: { rotate: 0, translateY: 0, translateX: 0 },
  opened: { width: 20, rotate: -45, translateY: -1.5, translateX: -1.5 }
};
const bottomVariants = {
  hover: { width: 18 },
  closed: { rotate: 0, display: 'block' },
  opened: { display: 'none' }
};

const LNBButton = ({ isOpen, onClick }: LNBButtonProps) => {
  const controls = useAnimation();

  useEffect(() => {
    const variant = isOpen ? 'opened' : 'closed';
    controls.start(variant).then();
  }, [isOpen, controls]);

  return (
    <StyledButton
      $open={isOpen}
      as={motion.div}
      whileHover={!isOpen ? 'hover' : ''}
      animate={controls}
      onClick={onClick}
    >
      <motion.div className="menu">
        <motion.span className="line" variants={topVariants} />
        <motion.span className="line" variants={centerVariants} />
        <motion.span className="line" variants={bottomVariants} />
      </motion.div>
      <motion.span className="menu-btn-txt">M E N U</motion.span>
    </StyledButton>
  );
};

interface MenuItem {
  label: string;
  to: string;
}

const menuItems: MenuItem[] = [
  { label: 'HOME', to: '/' },
  { label: 'ABOUT', to: '/about' },
  { label: 'SKILLS', to: '/skills' },
  { label: 'PROJECTS', to: '/projects' },
  { label: 'CONTACT', to: '/contact' }
];

const LNB = () => {
  const location = useLocation();
  const [isOpen, setOpen] = useState(false);
  const [active, setActive] = useState('HOME');

  useEffect(() => {
    setOpen(false);
    setActive(location.pathname);
  }, [location]);

  const handleClick = () => {
    setOpen(() => !isOpen);
  };

  return (
    <div>
      <LNBButton key="lnbButton" isOpen={isOpen} onClick={handleClick} />
      <MenuContainer style={{ transform: isOpen ? 'translateX(0%)' : 'translateX(-100%)' }}>
        <div className={`nav-container ${isOpen && 'nav-open'}`}>
          <div className="nav-title">kkangkyu00</div>
          <ul className="menu-nav">
            {menuItems.map((menu: MenuItem, index) => (
              <li className={`nav-item ${menu.to === active && 'active'}`}>
                <Link to={menu.to} style={{ transitionDelay: `0.${index}s` }}>
                  {menu.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="nav-footer">Copyright 2024. kkangkyu00. All rights reserved.</div>
          <div>qjxms</div>
        </div>
      </MenuContainer>
    </div>
  );
};

export default LNB;
