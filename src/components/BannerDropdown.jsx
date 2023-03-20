import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import bigChoice from '../assets/icons/bigChoice.svg';

export const BannerDropdown = ({
  title, 
  values, 
  dropdownValue, 
  setDropdownValue, 
}) => {
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
          <p className={dropdownValue.length > 0 
            ? 'bannerDropdown__value--checked' 
            : 'bannerDropdown__value'}
          >
            {dropdownValue.length > 0 ? dropdownValue : title}
          </p>
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
                  setDropdownValue(el);
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