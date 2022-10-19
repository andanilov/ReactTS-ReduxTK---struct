import React, { FC, ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

import NaviTop from '../../components/NaviTop';
import NaviLoginTop from '../../components/NaviLoginTop';
import css from './MainLayout.module.css';

interface IMainLayoutProps {
  children: ReactNode
}

const MainLayout : FC<IMainLayoutProps> = ({ children }) => {
  const { state } = useLocation(); // msg, error

  return (
    <div className={css.page}>
      <header>
        <aside><NaviTop /></aside>
        <aside><NaviLoginTop /></aside>
      </header>
      <section>
        {!!state?.msg && (<div className={css.msg}>{state.msg}</div>)}
        {!!state?.error && (<div className={css.error}>{state.error}</div>)}
        {children}
      </section>
      <footer>---</footer>
    </div>
  );
};

export default MainLayout;
