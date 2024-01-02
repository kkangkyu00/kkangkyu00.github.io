import React from 'react';
import { classNames } from 'utils';
import { StyledButton } from './style';

interface NavButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

const NavButton = ({ isOpen, onClick }: NavButtonProps) => {
  return (
    <StyledButton $open={isOpen} onClick={onClick}>
      <div className={classNames('nav-toggle', { opened: isOpen })}>
        <span className="line" />
        <span className="line" />
        <span className="line" />
      </div>
      <span className="nav-toggle-txt">M E N U</span>
    </StyledButton>
  );
};

export default NavButton;
