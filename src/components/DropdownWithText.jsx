import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Link } from 'react-router-dom';
import middleChoice from '../assets/icons/middleChoice.svg';

export const DropdownWithText = ({ title, text }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdownWithText">
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
            {title}
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
            {text}
            <button className="button dropdownWithText__text-button">
              <Link to={title}>
                <p>
                  Дізнатися більше
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