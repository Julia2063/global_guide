import { clsx } from 'clsx';
import { useState, useRef } from 'react';
import Link from 'next/link'
import PropTypes from 'prop-types';
import { rightTitle } from '../helpers/rightData';

import services from '../api/services.json';
import { useOnClickOutside } from '../hooks/useOnClickOutside';
import { useRouter } from 'next/router';

import styles from '../styles/servisesDropdown.module.scss';

export const ServisesDropdown = ({ title, img, values }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { locale } =  useRouter();

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
    <div className={styles.servisesDropdown} ref={refServisesDrop}>
      <label className={styles.servisesDropdown__label}>
        <div className={clsx(
          [styles.servisesDropdown__body], { [styles.servisesDropdown__body__active]: isOpen}
        )}>
          <button 
            className={clsx(
              [styles.servisesDropdown__button], 
              {[styles.servisesDropdown__button__active] : isOpen}
            )}            
            onClick={toggle}
            onKeyDown={handleKeyDown}
          >
            <img src={img} alt="icon" />
          </button>
          {title}
        </div>
        {isOpen && (
          <div className={styles.servisesDropdown__values}>
            {values.map(el => {
              // eslint-disable-next-line max-len
              const linkPath = services.find(e => rightTitle(e, locale).includes(`${title}: ${el}`))?.path;
              return (
                <li
                  className={styles.servisesDropdown__item}
                  key={el}
                >
                  <Link 
                    href={linkPath} 
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