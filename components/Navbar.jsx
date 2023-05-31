import { useContext, useRef, useState } from 'react';

import Link from 'next/link';
import { useTranslation } from 'next-i18next';

import { PageNavLink } from './PageNavLink';

import styles from '../styles/navbar.module.scss';
import { useOnClickOutside } from '../hooks/useOnClickOutside';
import { useWindowSize } from '../hooks/useWindowSize';
import { AppContext } from './AppProvider';

import Choice from '../public/choice.svg';
import LogoDark from '../public/logo_dark.svg';
import Cross from '../public/cross.svg';
import { useRouter } from 'next/router';

export const Navbar = ({ 
  style,
  handleMenu,  
  setHideOrSwow, 
  setIsOpenMenu 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const { width } = useWindowSize();

  const refNavbar = useRef();
  useOnClickOutside(refNavbar, () => {
    if (width < 769) {
      setIsOpenMenu(false);
      setHideOrSwow(() => {
    return { transform: 'translateX(100%)'};
    })};
    setIsOpen(false);
    }
  );
 
  const { user } = useContext(AppContext);
  const { locale, locales, pathname, query } = useRouter();
  const refLanguageValues = useRef();

  useOnClickOutside(refLanguageValues, () => setIsOpen(false));

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
      <div className={styles.navbar} style={style} ref={refNavbar}>

        <div className={styles.navbar__container}>
       
          <div  className={`${styles.navbar__container__between} onMobile`} />
          <Link href="/">
            <LogoDark
              className="logo--header" onClick={handleMenu} />
          </Link>
          <Cross 
            className={`${styles.navbar__cross} onMobile`}
            onClick={handleMenu}
          />
        </div>

        <div className={`${styles.navbar__languageToogler} onMobile` } ref={refLanguageValues}>
            <button className={styles.navbar__languageButton} onClick={toggle}>
              {locale}
              <Choice />
            </button>
            {isOpen && (
              <ul className={styles.navbar__languageValues}>
                {locales.map(el => (
                  <li
                    key={el}
                    onClick={toggle}
                  >
                    <Link 
                      href={{
                        pathname:`${pathname}`,
                        query,
                      }} 
                      locale={el}>
							        {el}
						        </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        <div className={styles.navbar__container}>
          
          <li className={styles.navbar__item} onClick={handleMenu}>
            <PageNavLink href="/services" text={t('navbar.services')} />
          </li>
          <li className={styles.navbar__item} onClick={handleMenu}>
            <PageNavLink href="/chat" text={t('navbar.chat')} />
          </li>
          <li className={styles.navbar__item} onClick={handleMenu}>
            <PageNavLink href="/about" text={t('navbar.about')} />
          </li>
          <li className={styles.navbar__item} onClick={handleMenu}>
            <PageNavLink href="/news" text={t('navbar.news')} />
          </li>
          <li className={styles.navbar__item} onClick={handleMenu}>
            <PageNavLink href="/explanations" text={t('navbar.explanations')} />
          </li>
        </div>

        <div className={`${styles.navbar__container} ${styles.navbar__container__large}`}>
          {!user && (
            <li className={styles.navbar__item}>
            <PageNavLink href="/registration" text={t('navbar.register')} />
          </li>
          )}
          
          <li className={styles.navbar__item__account}>
            <Link 
              href="/account" 
              className={styles.navbar__link}
            >
              <p>{user ? t('navbar.account') : t('navbar.cabinet')}</p>  
            </Link>
          </li>
        </div>

        <div className={`${styles.navbar__container} ${styles.navbar__container__small}`}>

          <li className={styles.navbar__item} onClick={handleMenu}>
            <Link 
              href="/account" 
              className={styles.navbar__link}
            >
              <p>{user ?  t('navbar.account') : t('navbar.login')}</p> 
            </Link>
          </li>
          {!user && (
            <li className={styles.navbar__item} onClick={handleMenu}>
            <Link 
              href="/registration"
              className={styles.navbar__link}
            >
              <p>{t('navbar.register_mobile')}</p> 
            </Link>
          </li>
          )}
          
        </div>

      </div>
  );
};

