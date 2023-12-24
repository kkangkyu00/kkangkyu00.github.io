import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
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
  }
  .menu-nav a {
    ${({ theme }) => theme.typography.title32B};
    font-weight: 900;
    color: inherit;
    text-decoration: none;
  }
  .nav-footer {
    position: absolute;
    bottom: 120px;
    left: calc(16vw - 60px);
    font-size: 12px;
  }
`;
const StyledButton = styled.div`
  position: fixed;
  z-index: 190;
  top: 50%;
  left: 25px;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  height: 40px;
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
  onClick: () => void;
}

const LNBButton = ({ onClick }: LNBButtonProps) => {
  return (
    <AnimatePresence>
      <StyledButton as={motion.div} whileHover="hover" onClick={onClick}>
        <motion.div className="menu">
          <motion.span className="line" variants={{ hover: { width: 20 } }} />
          <motion.span className="line" variants={{ hover: { width: 32 } }} />
          <motion.span className="line" variants={{ hover: { width: 18 } }} />
        </motion.div>
        <span className="menu-btn-txt">M E N U</span>
      </StyledButton>
    </AnimatePresence>
  );
};

const LNB = () => {
  const location = useLocation();
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  const handleClick = () => {
    setOpen(() => !isOpen);
  };
  return (
    <AnimatePresence>
      <LNBButton key="lnbButton" onClick={handleClick} />
      <MenuContainer style={{ transform: isOpen ? 'translateX(0%)' : 'translateX(-100%)' }}>
        <div className="nav-container">
          <div className="nav-title">kkangkyu00</div>
          <div className="menu-nav">
            <Link to="/">HOME</Link>
            <Link to="/about">ABOUT</Link>
            <Link to="/skills">SKILLS</Link>
            <Link to="/projects">PROJECTS</Link>
            <Link to="/contact">CONTACT</Link>
          </div>
          <div className="nav-footer">Copyright 2024. kkangkyu00. All rights reserved.</div>
          <div>qjxms</div>
        </div>
      </MenuContainer>
    </AnimatePresence>
  );
};

export default LNB;
