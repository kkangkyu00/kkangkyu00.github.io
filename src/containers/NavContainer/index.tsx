import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';

import { NavWrapper, StyledButton } from './style';

const topVariants = {
  hover: { width: 20 },
  closed: { width: 16, rotate: 0, translateY: 0, translateX: 0 },
  opened: { width: 20, rotate: 45, translateY: 3.5, translateX: -1.5 }
};
const centerVariants = {
  hover: { width: 32 },
  closed: { width: 20, rotate: 0, translateY: 0, translateX: 0 },
  opened: { width: 20, rotate: -45, translateY: -1.5, translateX: -1.5 }
};
const bottomVariants = {
  hover: { width: 18 },
  closed: { width: 12, rotate: 0, display: 'block' },
  opened: { display: 'none' }
};

interface LNBButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

const NavButton = ({ isOpen, onClick }: LNBButtonProps) => {
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
      <div className="nav-toggle">
        <motion.span className="line" variants={topVariants} />
        <motion.span className="line" variants={centerVariants} />
        <motion.span className="line" variants={bottomVariants} />
      </div>
      <motion.span className="nav-toggle-txt">M E N U</motion.span>
    </StyledButton>
  );
};

const menuItems: MenuItem[] = [
  { label: 'HOME', to: '/' },
  { label: 'ABOUT', to: '/about' },
  { label: 'SKILLS', to: '/skills' },
  { label: 'PROJECTS', to: '/projects' },
  { label: 'CONTACT', to: '/contact' }
];

interface MenuItem {
  label: string;
  to: string;
}

interface LNBProps {
  onClick: (open: boolean) => void;
}

const NavContainer = ({ onClick }: LNBProps) => {
  const location = useLocation();
  const [isOpen, setOpen] = useState(false);
  const [active, setActive] = useState('HOME');

  useEffect(() => {
    setOpen(false);
    setActive(location.pathname);
  }, [location]);

  const handleClick = () => {
    setOpen(() => !isOpen);
    onClick?.(!isOpen);
  };

  return (
    <div>
      <NavButton isOpen={isOpen} onClick={handleClick} />
      <NavWrapper $open={isOpen}>
        <div className={`nav-container ${isOpen && 'nav-open'}`}>
          <div className="nav-title">kkangkyu00</div>
          <ul className="nav-wrapper">
            {menuItems.map((menu: MenuItem, index) => (
              <li className={`nav-item ${menu.to === active && 'active'}`}>
                <Link to={menu.to} style={{ transitionDelay: `0.${index + 1}s` }}>
                  {menu.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="nav-footer">Copyright 2024. kkangkyu00. All rights reserved.</div>
        </div>
      </NavWrapper>
    </div>
  );
};

export default NavContainer;
