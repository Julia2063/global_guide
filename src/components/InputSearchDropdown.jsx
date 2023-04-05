import React from 'react';
import { Link } from 'react-router-dom';

import { useTranslation } from 'react-i18next';
import { rightTitle, rightTitle2 } from '../helpers/rightData';

export const InputSearchDropdown = ({ search, handleCloseSearchDropdown }) => {
  const { i18n }  = useTranslation();

  return (
    <ul className="inputSearchDropdown">
      {search.map(el => {
  
        return (
          <Link 
            // eslint-disable-next-line max-len
            to={`${el.type === 'questions' ? '' : `/${el.type}`}/${el.path}`}
            key={el.path + el.id} 
            onClick={handleCloseSearchDropdown}
          >
            <li 
              className="inputSearchDropdown__item" 
            >
              {rightTitle2(el, i18n.language) 
                ? rightTitle2(el, i18n.language) 
                : rightTitle(el, i18n.language)
              }
            </li>  
          </Link>
        );
      })}
    </ul>
  );
};