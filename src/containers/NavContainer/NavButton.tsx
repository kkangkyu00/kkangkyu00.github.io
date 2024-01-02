import React from 'react';
import { StyledButton } from './style';

interface LNBButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

const NavButton = ({ isOpen, onClick }: LNBButtonProps) => {
  return (
    <StyledButton $open={isOpen} onClick={onClick}>
      <div className={`nav-toggle ${isOpen ? 'opened' : ''}`}>
        <span className="line" />
        <span className="line" />
        <span className="line" />
      </div>
      <span className="nav-toggle-txt">M E N U</span>
    </StyledButton>
  );
};

export default NavButton;
