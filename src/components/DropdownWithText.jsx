import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { convertJsonToHTML } from '../helpers/convertJsonToHTML';
import middleChoice from '../assets/icons/middleChoice.svg';
import { useOnClickOutside } from '../hooks/useOnClickOutside';

export const DropdownWithText = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { titleEN, titleRU, titleUA, textEN, textRU, textUA, path } = item;
  const { t, i18n }  = useTranslation();

  const refDropWithText = useRef();

  useOnClickOutside(refDropWithText, () => setIsOpen(false));

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdownWithText" ref={refDropWithText}>
      <label className="dropdownWithText__label">
        <div className={classNames(
          'dropdownWithText__body', {'dropdownWithText__body--open' : isOpen}
        )}
        >
          <button 
            className="dropdownWithText__button onMobile" 
            onClick={toggle}
          >
            <img 
              src={middleChoice} 
              alt="select" 
              className={classNames(
                {'dropdownWithText__icon--rotate' : isOpen,
                })}
            />
          </button>
          <h2 className="page__title-2">
            {i18n.language === 'en' && titleEN}
            {i18n.language === 'ru' && titleRU}
            {i18n.language === 'ua' && titleUA}
          </h2>
          <button 
            className="dropdownWithText__button onDesktop" 
            onClick={toggle}
          >
            <img 
              src={middleChoice} 
              alt="select" 
              className={classNames(
                {'dropdownWithText__icon--rotate' : isOpen,
                })}
              
            />
          </button>
        </div>
        {isOpen && (
          <div className="dropdownWithText__text">
            {i18n.language === 'en' && convertJsonToHTML(textEN)}
            {i18n.language === 'ru' && convertJsonToHTML(textRU)}
            {i18n.language === 'ua' && convertJsonToHTML(textUA)}
            <button className="button dropdownWithText__text-button">
              <Link to={path}>
                <p>
                  {t('homePage.knowMore')}
                </p>
              </Link>
              
            </button>
          </div>
        )}
      </label>
    </div>
  );
};

DropdownWithText.propType = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
};