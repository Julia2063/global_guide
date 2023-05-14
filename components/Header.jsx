import { useState, useEffect, useRef } from 'react';
import Link from 'next/link'

import PropTypes from 'prop-types';

import { useWindowSize } from '../hooks/useWindowSize';
import { getRightData, rightTitle, rightTitle2 } from '../helpers/rightData';
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
import { getTitleOfPosts, getTitleOfServices } from '../helpers/firebaseControl';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [search, setSearch] = useState([]);

  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [hideOrShow, setHideOrSwow] = useState({});
  const [isSearch, setIsSearch] = useState(false);
  const [isSearchDropdown, setIsSearchDropdown] = useState(true);

  const { width } = useWindowSize();
  const { locale, locales, pathname, query } = useRouter()

  const { t } = useTranslation('common');

  const refLanguageValues = useRef();
  const inputRef = useRef();
 
  useOnClickOutside(refLanguageValues, () => setIsOpen(false));
  useOnClickOutside(inputRef, () => handleCloseSearchDropdown());
 


  
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

  

  const handleKeyDown = (event) => {
    if (event.keyCode === 13 || event.keyCode === 27) {
      setSearchQuery('');
      setIsSearch(!isSearch);
    }
  };

  const handleIsSearch = () => {
    setIsSearch(!isSearch);
  };

  function getSearch () { 
    
    const searchArr =
      [...arguments].reduce((start, el) => start.concat(el), []);

    return searchArr.filter(el => {
      return  (
        el[0].toLowerCase().includes(searchQuery.toLowerCase()) 
      );
    });
  };

  const handleChange = async(event) => {
    const { value } = event.target;
    setSearchQuery(value);
    setIsSearchDropdown(true);
    try {
      const newsTitles = await getTitleOfPosts('news', locale);
      const questionsTitles = await getTitleOfPosts('questions', locale);
      const explanationsTitles = await getTitleOfPosts('explanations', locale);
      const servicesTitles = await getTitleOfServices(locale);
      const citizenshipTitles = await getTitleOfPosts('citizenship', locale);
      const searchResult =  getSearch(
        newsTitles,
        questionsTitles, 
        explanationsTitles,
        servicesTitles,
        citizenshipTitles,
      );
      if (searchQuery.length > 0) {
        setSearch(searchResult);
      }
    } catch (error){
      alert (error);
    }
  };
 
  const handleCloseSearchDropdown = () => {
    if (searchQuery.length > 0) {
      setIsSearchDropdown(!isSearchDropdown);
    }
    setSearchQuery('');
  };
  
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header__leftBlock}>
          <label className={styles.header__label} ref={inputRef}>
            <input 
              type="text"
              className={styles.header__input}
              placeholder={t('header.search')}
              value={searchQuery}
              onChange={handleChange}
              onFocus={() => {
                setIsSearchDropdown(true);
              }}
              onKeyDown={handleKeyDown}
              
            />
            <SearchIcon className={styles.header__img}/>
            {(isSearchDropdown && searchQuery.length > 0 && search.length > 0) && (
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
                value={searchQuery}
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

