import { useRef } from 'react';
import Link from 'next/link'

import { useOnClickOutside } from '../hooks/useOnClickOutside';

import styles from '../styles/inputSearchDropdown.module.scss';

export const InputSearchDropdown = ({ 
  search,
  handleCloseSearchDropdown,
}) => {

  const searchRef = useRef();
  useOnClickOutside(searchRef, () => handleCloseSearchDropdown());

  return (
    <ul className={styles.inputSearchDropdown} ref={searchRef}>
      {search.map(el => {
  
        return (
          <Link 
            href={el[2] === 'lehalizatsiia-v-ukraini-hromadianstvo' ? '/services/citizenship': `/${el[1]}/${el[2]}`}
            key={el[2]} 
            onClick={handleCloseSearchDropdown}
          >
            <li 
              className={styles.inputSearchDropdown__item} 
            >
            {el[0]}
            </li>  
          </Link>
        );
      })}
    </ul>
  );
};