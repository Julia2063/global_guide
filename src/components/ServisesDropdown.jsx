import classNames from 'classnames';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { replaceSlash } from '../App';


export const ServisesDropdown = ({ title, img, values }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 27 && isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <div className="servisesDropdown">
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
            {values.map(el => (
              <li
                className="servisesDropdown__item"
                key={el}
              >
                <Link to={replaceSlash(`${title}: ${el}`)} >
                  {el}
                </Link>
              </li>
            ))}
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