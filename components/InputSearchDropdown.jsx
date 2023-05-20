import { useRef } from 'react';
import Link from 'next/link'

import { useOnClickOutside } from '../hooks/useOnClickOutside';

import styles from '../styles/inputSearchDropdown.module.scss';
import { useRouter } from 'next/router';

export const InputSearchDropdown = ({ 
  search,
  handleCloseSearchDropdown,
}) => {

  const router = useRouter();

  const goToSearch = (search, path) => {
		router.push({
			pathname: `${path}/search`,
			query: {
				q: search,
			}
		});
	};


  const searchRef = useRef();
  useOnClickOutside(searchRef, () => handleCloseSearchDropdown());

  return (
    <ul className={styles.inputSearchDropdown} ref={searchRef}>
      {search.map((el, i) => {
        const getPath = () => {
          switch(true) {
            case el[2] === 'lehalizatsiia-v-ukraini-hromadianstvo':
              return '/services/citizenship';
            case el[1] === 'citizenship': 
              return `/services/citizenship`;
            default:
              return `/${el[1]}`
          }
        };
        return (
            <li 
              className={styles.inputSearchDropdown__item}
              key={el[2] + 1} 
              onClick={() => {
                goToSearch(el[2], getPath());
                handleCloseSearchDropdown;
              }}
            >
            {el[0]}
            </li>  
        );
      })}
    </ul>
  );
};