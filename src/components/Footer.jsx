/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/img/logo_white.svg';
import fb from '../assets/icons/fb.svg';
import insta from '../assets/icons/insta.svg';
import tg from '../assets/icons/tg.svg';
import mail from '../assets/icons/mail.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <section className="footer__section">
            <Link to="/home">
              <img src={logo} alt="logo" className="footer__logo logo--footer"/>
            </Link>
            
            <p className="footer__text">
            Юридична фірма "Правий центр" - ваш головний помічник у вирішенні міграційних питань. Компанія була створена в Харкові в 2010 році.
            </p>
          </section>
          <section className="footer__section footer__section--2">
            <Link to="/home" className="footer__link">
              Головна
            </Link>
            <Link to="/services" className="footer__link">
              Послуги
            </Link>
          </section>
          <section className="footer__section footer__section--3">

            <div className="footer__socialMedia">
              <a href="https://www.facebook.com/">
                <img src={fb} alt="fb" />
              </a>
              <a href="https://www.instagram.com/">
                <img src={insta} alt="insta" />
              </a>
              <a href="https://t.me/">
                <img src={tg} alt="tg" />
              </a>
            </div>
            <h3 className="footer__section-title">
              Технічна підтримка
            </h3>
            <a href="mailto:Guidepro.ua@gmail.com" className="footer__link">
              <img src={mail} alt="mail" className="footer__link-logo"/>
              <p>Guidepro.ua@gmail.com</p>
            </a>
          </section>

          <section className="onMobile footer__end">Created by Noname Digital</section>
        </div>

        <section className="onDesktop footer__end">
          <p>Created by Noname Digital</p>
          <p>Privacy Policy</p>
        </section>
      </div>


    </footer>
  );
};