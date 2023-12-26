import React from 'react';
import { HeaderContainer } from 'containers';

const LNB = React.lazy(() => import('containers/LNB'));

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const handleClick = (value: boolean) => {
    console.log(value, '######### value');
  };
  return (
    <div>
      <HeaderContainer />
      <LNB onClick={handleClick} />
      {children}
    </div>
  );
};

export default MainLayout;
