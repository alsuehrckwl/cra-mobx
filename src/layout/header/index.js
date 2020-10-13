import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoImage from '../../assets/icons/favicon-32x32.png';
import style from './style.module.scss';

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.logo}>
        <img src={LogoImage} alt="logo" />
      </div>
      <div className={style.menus}>
        <ul>
          <li>
            <NavLink to={'/'} activeClassName={style.activeTab}>
              홈
            </NavLink>
          </li>
          <li>
            <NavLink to={'/auth'} activeClassName={style.activeTab}>
              로그인
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
