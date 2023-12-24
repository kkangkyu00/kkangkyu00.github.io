import React from 'react';
import { HeaderContainer } from 'containers';

const LNB = React.lazy(() => import('containers/LNB'));

const MainLayout = ({ children }: any) => {
  return (
    <div>
      <HeaderContainer />
      <LNB />
      {children}
    </div>
  );
};

export default MainLayout;
