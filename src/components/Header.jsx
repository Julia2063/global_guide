import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


import PropTypes from 'prop-types';
import searchImg from '../assets/icons/search.svg';
import searchImgDark from '../assets/icons/searchImgDark.svg';
import choice from '../assets/icons/choiсe.svg' ;
import logo from '../assets/img/logo_dark.svg';
import menu from '../assets/icons/menu.svg';
import cross from '../assets/icons/cross__gray.svg';

import services from '../api/services.json';
import explanations from '../api/explanations.json';
import questions from '../api/questions.json';
import news from '../api/newsApi.json';
import citizenship from '../api/citizenship.json';

import { useWindowSize } from '../hooks/useWindowSize';
import { rightTitle, rightTitle2 } from '../helpers/rightData';
import { Navbar } from './Navbar';
import { InputSearchDropdown } from './InputSearchDropdown';



export const Header = () => {
  const { t, i18n }  = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [search, setSearch] = useState([]);
  const languages = ['ua', 'en', 'ru'];

  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [hideOrShow, setHideOrSwow] = useState({});
  const [isSearch, setIsSearch] = useState(false);
  const [isSearchDropdown, setIsSearchDropdown] = useState(true);
  const { width } = useWindowSize();

  
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
  
  const onChangeLanguage = (el) => {
    i18n.changeLanguage(el);
  };

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

  function getSearch () { 
    
    const searchArr =
      [...arguments].reduce((start, el) => start.concat(el), []);

    return searchArr.filter(el => {

     
      return  (
        // eslint-disable-next-line max-len
        rightTitle(el, i18n.language).toLowerCase().includes(query.toLowerCase()) 
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
  }, [query]);

  
  const handleCloseSearchDropdown = () => {
    if (query.length > 0) {
      setIsSearchDropdown(!isSearchDropdown);
    }
    setQuery('');
  };
  
  return (
    <header className="header">
      <div className="container">
        <div className="header__left-block">
          <label className="header__label" >
            <input 
              type="text"
              className="header__input" 
              placeholder={t('header.search')}
              value={query}
              onChange={handleChange}
              onFocus={() => {
                setIsSearchDropdown(true);
              }}
              onKeyDown={handleKeyDown}
            />
            <img 
              src={searchImg} 
              alt="search" 
              className="header__img"
            />

            {(isSearchDropdown && query.length > 0 && search.length > 0) && (
              <InputSearchDropdown 
                search={search} 
                handleCloseSearchDropdown={handleCloseSearchDropdown}
              />
            )}
          </label>

          <div className="header__language-toogler">
            <button className="header__button" onClick={toggle}>
              {i18n.language}
              <img src={choice} alt="choice" />
            </button>
            {isOpen && (
              <ul className="header__language-values" >
                {languages.map(el => (
                  <li
                    key={el}
                    onClick={() => {
                      onChangeLanguage(el);
                      toggle();
                    }}
                  >
                    {el}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <Navbar style={hideOrShow} handleMenu={handleMenu} />
        <div className="header--onMobile">
          

          {isSearch && 
            <label className="header__label header__input-mobile">
              <input 
                type="text"
                autoFocus 
                placeholder="Пошук"
                value={query}
                onChange={handleChange}
                onFocus={() => {
                  setIsSearchDropdown(true);
                }}
                onKeyDown={handleKeyDown}
              />
              <img 
                src={searchImg} 
                alt="search" 
                className="header__img--mobile"
              />
                
                
              <button onClick={handleIsSearch}>
                <img src={cross} alt="cross" />
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
              <button className="header__button" onClick={handleIsSearch}>
                <img src={searchImgDark} alt="search" />
              </button>
              <Link to="/">
                <img src={logo} alt="logo" className="logo--header" />
              </Link><button className="header__button" onClick={handleMenu}>
                <img src={menu} alt="menu" />
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