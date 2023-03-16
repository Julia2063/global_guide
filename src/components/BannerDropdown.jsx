import React, { useState } from 'react';
import classNames from 'classnames';
import bigChoice from '../assets/icons/bigChoice.svg';

export const BannerDropdown = ({ title, values, handleChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bannerDropdown">
      <label className="bannerDropdown__label">
        <div className={classNames(
          'bannerDropdown__body', {'bannerDropdown__body--active': isOpen}
        )}>
          {title}
          <button className="bannerDropdown__button" onClick={toggle}>
            <img src={bigChoice} alt="select" />
          </button>
          
        </div>
        {isOpen && (
          <div className="bannerDropdown__values">
            {values.map(el => (
              <li
                key={el}
                onClick={() => {
                  handleChange(el);
                }}
                className="bannerDropdown__item"
              >
                {el}
              </li>
            ))}
          </div>
        )}
      </label>
    </div>
  );
};