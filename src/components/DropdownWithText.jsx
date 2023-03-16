import classNames from 'classnames';
import React, { useState } from 'react';

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
              hidden={isOpen}
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
              hidden={isOpen}
            />
          </button>
        </div>
        {isOpen && (
          <div className="dropdownWithText__text">
            {text}
            <button className="button dropdownWithText__text-button">
              <p>
                  Дізнатися більше
              </p>
            </button>
          </div>
        )}
      </label>
    </div>
  );
};