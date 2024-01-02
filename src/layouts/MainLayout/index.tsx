import React from 'react';
import { HeaderContainer, NavContainer } from 'containers';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const handleClick = (value: boolean) => {
    console.log(value, '######### value');
  };

  return (
    <div>
      <HeaderContainer isMenuOpen />
      <NavContainer onClick={handleClick} />
      <div />
      {children}
    </div>
  );
};

export default MainLayout;
