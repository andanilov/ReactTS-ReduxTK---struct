import React, { FC, ReactNode } from 'react';
import NaviTop from '../components/NaviTop';

interface IMainLayoutProps {
  children: ReactNode
}

const MainLayout : FC<IMainLayoutProps> = ({ children }) => (
  <>
    <header><NaviTop /></header>
    <section>{children}</section>
  </>
);

export default MainLayout;
