import { useRef } from 'react';
import Link from 'next/link'

/* import { rightTitle, rightTitle2 } from '../helpers/rightData'; */
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
            // eslint-disable-next-line max-len
            href={`${el.type === 'questions' ? '' : `/${el.type}`}/${el.path}`}
            key={el.path + el.id} 
            onClick={handleCloseSearchDropdown}
          >
            <li 
              className={styles.inputSearchDropdown__item} 
            >
             {/*  {rightTitle2(el, i18n.language) 
                ? rightTitle2(el, i18n.language) 
                : rightTitle(el, i18n.language)
              } */}
            </li>  
          </Link>
        );
      })}
    </ul>
  );
};