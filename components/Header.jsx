import { useState, useEffect, useRef } from 'react';
import Link from 'next/link'

import PropTypes from 'prop-types';

import services from '../api/services.json' ;
import explanations from '../api/explanations.json';
import questions from '../api/questions.json';
import news from '../api/newsApi.json';
import citizenship from '../api/citizenship.json';

import { useWindowSize } from '../hooks/useWindowSize';
import { rightTitle, rightTitle2 } from '../helpers/rightData';
import { useOnClickOutside } from '../hooks/useOnClickOutside';
import { Navbar } from './Navbar';
import { InputSearchDropdown } from './InputSearchDropdown';
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next';

import SearchIcon from '../public/search.svg';
import Choice from '../public/choice.svg';
import CrossGray from '../public/cross__gray.svg';
import SearchImgDark from '../public/searchImgDark.svg';
import LogoDark from '../public/logo_dark.svg';
import Menu from '../public/menu.svg';

import styles from '../styles/header.module.scss';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searshQuery, setSearchQuery] = useState('');
  const [search, setSearch] = useState([]);

  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [hideOrShow, setHideOrSwow] = useState({});
  const [isSearch, setIsSearch] = useState(false);
  const [isSearchDropdown, setIsSearchDropdown] = useState(true);
  const { width } = useWindowSize();
  const { locale, locales, pathname, query } = useRouter()

  

  const { t } = useTranslation('common');

  const refLanguageValues = useRef();
  useOnClickOutside(refLanguageValues, () => setIsOpen(false));


  
  const handleMenu = () => {
    setIsOpenMenu((prev) => !prev);
    if (width < 769) {
      if (isOpenMenu) {
        setHideOrSwow(() => {
          return { transform: 'translateX(100%)'};
        });
      } else {
        setHideOrSwow(() => {
          return {transform: 'translateX(0)'};
        });
      }
    } 
  };

  useEffect(() => {
    if (width > 769) {
      setHideOrSwow(() => {
        return {transform: 'translateX(0)'};
      });
    } else {
      setHideOrSwow(() => {
        return {transform: 'translateX(100%)'};
      });
    }

  }, [width]);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setQuery(value);
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 13 || event.keyCode === 27) {
      setQuery('');
    }
  };

  const handleIsSearch = () => {
    setIsSearch(!isSearch);
  };

  /* function getSearch () { 
    
    const searchArr =
      [...arguments].reduce((start, el) => start.concat(el), []);

    return searchArr.filter(el => {

     
      return  (
        // eslint-disable-next-line max-len
        rightTitle(el, i18n.language)?.toLowerCase().includes(query.toLowerCase()) 
      // eslint-disable-next-line max-len
      || rightTitle2(el, i18n.language)?.toLowerCase().includes(query.toLowerCase())
      );
      
    });
  };


  useEffect(() => {
    const searchResult =  getSearch(
      services, 
      news, 
      questions,
      explanations,
      citizenship
    );
    if (query.length > 0) {
      setSearch(searchResult);
    }
  }, [query]); */

  
  const handleCloseSearchDropdown = () => {
    if (query.length > 0) {
      setIsSearchDropdown(!isSearchDropdown);
    }
    setQuery('');
  };
  
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header__leftBlock}>
          <label className={styles.header__label} >
            <input 
              type="text"
              className={styles.header__input}
              placeholder={t('header.search')}
              value={searshQuery}
              onChange={handleChange}
              onFocus={() => {
                setIsSearchDropdown(true);
              }}
              onKeyDown={handleKeyDown}
            />
            <SearchIcon className={styles.header__img}/>
            {(isSearchDropdown && query.length > 0 && search.length > 0) && (
              <InputSearchDropdown 
                search={search} 
                handleCloseSearchDropdown={handleCloseSearchDropdown}
              />
            )}
          </label>

          <div className={styles.header__languageToogler}>
            <button className={styles.header__button} onClick={toggle}>
              {locale}
              <Choice />
            </button>
            {isOpen && (
              <ul className={styles.header__languageValues} ref={refLanguageValues} >
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
        </div>
        <Navbar 
          style={hideOrShow} 
          handleMenu={handleMenu} 
          setHideOrSwow={setHideOrSwow}
          setIsOpenMenu={setIsOpenMenu}
        />

        <div className={styles.onMobile}>
          

          {isSearch && 
            <label className={`${styles.header__label} ${styles.header__input__mobile}`}>
              <input 
                type="text"
                autoFocus 
                placeholder="Пошук"
                value={searshQuery}
                onChange={handleChange}
                onFocus={() => {
                  setIsSearchDropdown(true);
                }}
                onKeyDown={handleKeyDown}
              />
              <SearchIcon className={styles.header__img__mobile}/>
                
              <button onClick={handleIsSearch}>
                <CrossGray height={15} width={15}/>
              </button>

              {(isSearchDropdown && query.length > 0 && search.length > 0)
                    && (
                      <InputSearchDropdown 
                        search={search} 
                        handleCloseSearchDropdown={handleCloseSearchDropdown}
                      />
                    )}
            </label>
          }
          {!isSearch && (
            <>
              <button className={styles.header__button} onClick={handleIsSearch}>
                <SearchImgDark />
              </button>
              <Link href="/">
                <LogoDark alt="logo" className="logo--header" />
              </Link>
              <button className={styles.header__button} onClick={handleMenu}>
                <Menu />
              </button>
            </>
          )}
          
        </div>
      </div>
    </header>
  );
};

Header.propType = {
  language: PropTypes.string, 
  setLanguage: PropTypes.func, 
};

