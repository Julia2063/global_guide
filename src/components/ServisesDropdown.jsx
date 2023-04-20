import classNames from 'classnames';
import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { rightTitle } from '../helpers/rightData';

import services from '../api/services.json';
import { useOnClickOutside } from '../hooks/useOnClickOutside';

export const ServisesDropdown = ({ title, img, values }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n }  = useTranslation();

  const refServisesDrop = useRef();

  useOnClickOutside(refServisesDrop, () => setIsOpen(false));

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 27 && isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <div className="servisesDropdown" ref={refServisesDrop}>
      <label className="servisesDropdown__label">
        <div className={classNames(
          'servisesDropdown__body', {'servisesDropdown__body--active': isOpen}
        )}>
          <button 
            className={classNames(
              'servisesDropdown__button', 
              {'servisesDropdown__button--active' : isOpen}
            )}            
            onClick={toggle}
            onKeyDown={handleKeyDown}
          >
            <img src={img} alt="icon" />
          </button>
          {title}
        </div>
        {isOpen && (
          <div className="servisesDropdown__values">
            {values.map(el => {
              // eslint-disable-next-line max-len
              const linkPath = services.find(e => rightTitle(e, i18n.language).includes(`${title}: ${el}`))?.path;
              return (
                <li
                  className="servisesDropdown__item"
                  key={el}
                >
                  <Link 
                    to={linkPath} 
                  >
                    {el}
                  </Link>
                </li>
              );
            })}
          </div>
        )}
      </label>
    </div>
  );
};

ServisesDropdown.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string.isRequired,
  values: PropTypes.arrayOf(PropTypes.string),
};