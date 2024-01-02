import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { classNames } from 'utils';

import NavButton from './NavButton';
import { NavWrapper } from './style';

const menuItems: Record<string, string>[] = [
  { label: 'HOME', to: '/' },
  { label: 'ABOUT', to: '/about' },
  { label: 'SKILLS', to: '/skills' },
  { label: 'PROJECTS', to: '/projects' },
  { label: 'CONTACT', to: '/contact' }
];

interface NavContainerProps {
  onClick?: (open: boolean) => void;
}

const NavContainer = ({ onClick }: NavContainerProps) => {
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
        <div className={classNames('nav-container', { 'nav-open': isOpen })}>
          <div className="nav-title">kkangkyu00</div>
          <ul className="nav-wrapper">
            {menuItems.map((menu, index) => (
              <li className={classNames('nav-item', { active: menu.to === active })}>
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
