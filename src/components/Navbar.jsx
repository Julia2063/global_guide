import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo_dark.svg';
import cross from '../assets/icons/cross.svg';


import { PageNavLink } from './PageNavLink';


export const Navbar = ({ style, handleMenu }) => {

  return (
    <>
      <div 
        className="navbar__overlay onMobile" 
        onClick={handleMenu}
        style={style}
      />
      <div className="navbar" style={style}>

        <div className="navbar__container">
          <div className="navbar__container-between onMobile" />
          <Link to="/">
            <img
              src={logo}
              alt="logo"
              className="logo--header" onClick={handleMenu} />
          </Link>
          <img 
            src={cross} 
            alt="cross" 
            className="navbar__cross onMobile" 
            onClick={handleMenu}
          />
        </div>


        <div className="navbar__container">
          <li className="navbar__item" onClick={handleMenu}>
            <PageNavLink to="/services" text="Послуги" />
          </li>
          <li className="navbar__item" onClick={handleMenu}>
            <PageNavLink to="/chat" text="Global чат" />
          </li>
          <li className="navbar__item" onClick={handleMenu}>
            <PageNavLink to="/about" text="Про GGS" />
          </li>
          <li className="navbar__item" onClick={handleMenu}>
            <PageNavLink to="/news" text="Новини" />
          </li>
          <li className="navbar__item" onClick={handleMenu}>
            <PageNavLink to="/explanations" text="Роз'яснення" />
          </li>
        </div>

        <div className="navbar__container navbar__container--large">
          <li className="navbar__item">
            <PageNavLink to="/registration" text="Зареєструватися" />
          </li>
          <li className="navbar__item--account">
            <Link to="/account" className="navbar__link">
              <p>Вхід до кабінету</p>  
            </Link>
          </li>
        </div>

        <div className="navbar__container navbar__container--small">

          <li className="navbar__item" onClick={handleMenu}>
            <Link to="/account" className="navbar__link">
              <p>Вхід</p> 
            </Link>
          </li>
          <li className="navbar__item" onClick={handleMenu}>
            <Link to="/registration" className="navbar__link">
              <p>Реєстрація</p> 
            </Link>
          </li>
        </div>

      </div>
    </>
  );
};