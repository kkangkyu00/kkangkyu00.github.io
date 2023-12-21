import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const StyledButton = styled.div`
  position: absolute;
  top: 50%;
  left: 40px;
  z-index: 1;
  .menu-txt {
    display: inline-block;
    font-size: 10px;
    transform: rotate(-90deg);
  }
  svg line {
    transition: stroke 1s ease;
  }
`;

const LNBButton = () => {
  const handleClick = () => {
    console.log('##### handleClick');
  };
  const iconVariants: Record<string, object> = {
    hover: { x1: 0, transition: { type: 'spring' } }
  };
  // 12 20 16
  // 18 32 20
  return (
    <StyledButton>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="currentColor"
        onClick={handleClick}
        whileHover="hover"
      >
        <motion.g stroke="currentColor">
          <line x1="16" y1="0" x2="32" y2="0" />
          <motion.line x1="12" y1="6" x2="32" y2="6" variants={iconVariants} />
          <line x1="20" y1="12" x2="32" y2="12" />
        </motion.g>
      </motion.svg>
      <span className="menu-txt">MENU</span>
    </StyledButton>
  );
};

const LNB = () => {
  return (
    <div>
      <LNBButton />
    </div>
  );
};

export default LNB;
