import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import searchImg from '../assets/icons/search.svg';
import searchImgDark from '../assets/icons/searchImgDark.svg';
import choice from '../assets/icons/choiсe.svg' ;
import logo from '../assets/img/logo_dark.svg';
import menu from '../assets/icons/menu.svg';
import { Navbar } from './Navbar';


export const Header = ({ 
  language, 
  setLanguage, 
  setSearch,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const languages = ['ukr', 'en'];

  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [hideOrShow, setHideOrSwow] = useState({});

  const handleMenu = () => {
    setIsOpenMenu((prev) => !prev);
    if (window.matchMedia('(max-width: 768px)').matches) {
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

  
  const onChange = (value) => {
    setLanguage(value);
  };

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setQuery(value);
  };

  const handleBlur = () => {
    setSearch(query);
    setQuery('');
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      setSearch(query);
      setQuery('');
    }
  };



  return (
    <header className="header">
      <div className="container">
        <div className="header__left-block">
          <label className="header__label">
            <input 
              className="header__input" 
              placeholder="Пошук"
              value={query}
              onChange={handleChange}
              onBlur={handleBlur}
              onKeyDown={handleKeyDown}
            />
            <img 
              src={searchImg} 
              alt="search" 
              className="header__img"
            />
          </label>
          
          <div className="header__language-toogler">
            <button className="header__button" onClick={toggle}>
              {language}
              <img src={choice} alt="choice" />
            </button>
            {isOpen && (
              <ul className="header__language-values">
                {languages.map(el => (
                  <li
                    key={el}
                    onClick={() => {
                      onChange(el);
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
          <button className="header__button">
            <img src={searchImgDark} alt="search" />
          </button>
          
          <Link to="/">
            <img src={logo} alt="logo" className="logo--header" />
          </Link>

          <button className="header__button" onClick={handleMenu}>
            <img src={menu} alt="menu" />
          </button>
        </div>
      </div>
    </header>
  );
};