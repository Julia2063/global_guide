import classNames from 'classnames';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const ServisesDropdown = ({ title, img, values }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
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
          >
            <img src={img} alt="icon" />
          </button>
          {title}
        </div>
        {isOpen && (
          <div className="servisesDropdown__values">
            {values.map(el => (
              <Link to={el} key={el}>
                <li
                  className="servisesDropdown__item"
                >
                  {el}
                </li>
              </Link>
              
            ))}
          </div>
        )}
      </label>
    </div>
  );
};