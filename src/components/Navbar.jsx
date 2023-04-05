import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '../assets/img/logo_dark.svg';
import cross from '../assets/icons/cross.svg';


import { PageNavLink } from './PageNavLink';


export const Navbar = ({ style, handleMenu }) => {
  const { t, i18n }  = useTranslation();
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
            <PageNavLink to="/services" text={t('navbar.services')} />
          </li>
          <li className="navbar__item" onClick={handleMenu}>
            <PageNavLink to="/chat" text={t('navbar.chat')} />
          </li>
          <li className="navbar__item" onClick={handleMenu}>
            <PageNavLink to="/about" text={t('navbar.about')} />
          </li>
          <li className="navbar__item" onClick={handleMenu}>
            <PageNavLink to="/news" text={t('navbar.news')} />
          </li>
          <li className="navbar__item" onClick={handleMenu}>
            <PageNavLink to="/explanations" text={t('navbar.explanations')} />
          </li>
        </div>

        <div className="navbar__container navbar__container--large">
          <li className="navbar__item">
            <PageNavLink to="/registration" text={t('navbar.register')} />
          </li>
          <li className="navbar__item--account">
            <Link to="/account" className="navbar__link">
              <p>{t('navbar.cabinet')}</p>  
            </Link>
          </li>
        </div>

        <div className="navbar__container navbar__container--small">

          <li className="navbar__item" onClick={handleMenu}>
            <Link to="/account" className="navbar__link">
              <p>{t('navbar.login')}</p> 
            </Link>
          </li>
          <li className="navbar__item" onClick={handleMenu}>
            <Link to="/registration" className="navbar__link">
              <p>{t('navbar.register_mobile')}</p> 
            </Link>
          </li>
        </div>

      </div>
    </>
  );
};