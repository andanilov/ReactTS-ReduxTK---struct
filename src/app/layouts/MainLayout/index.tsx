import React, { FC, ReactNode } from 'react';
import NaviTop from '../../components/NaviTop';
import NaviLoginTop from '../../components/NaviLoginTop';
import css from './MainLayout.module.css';

interface IMainLayoutProps {
  children: ReactNode
}

const MainLayout : FC<IMainLayoutProps> = ({ children }) => (
  <div className={css.page}>
    <header>
      <aside><NaviTop /></aside>
      <aside><NaviLoginTop /></aside>
    </header>
    <section>{children}</section>
    <footer>---</footer>
  </div>
);

export default MainLayout;
