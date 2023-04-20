import React, { useState, useRef } from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import bigChoice from '../assets/icons/bigChoice.svg';
import { useOnClickOutside } from '../hooks/useOnClickOutside';


export const BannerDropdown = ({
  title, 
  values, 
  dropdownValue, 
  setDropdownValue, 
}) => {
  const ref = useRef();
  const [isOpen, setIsOpen] = useState(false);

  useOnClickOutside(ref, () => setIsOpen(false));

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 27 && isOpen) {
      setIsOpen(false);
    }
  };


  return (
    <div className="bannerDropdown" ref={ref}>
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
          <button 
            className="bannerDropdown__button" 
            onClick={toggle}
            onKeyDown={handleKeyDown}
          >
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

BannerDropdown.propTypes = {
  title: PropTypes.string.isRequired,
  values: PropTypes.arrayOf(PropTypes.string),
  dropdownValue: PropTypes.string, 
  setDropdownValue: PropTypes.func,
};