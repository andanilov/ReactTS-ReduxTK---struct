import React, { FC } from 'react';

interface IMainLayoutProps {
  children: JSX.Element
}

const MainLayout : FC<IMainLayoutProps> = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  );
}

export default MainLayout;
