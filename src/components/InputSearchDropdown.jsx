import React from 'react';
import { Link } from 'react-router-dom';

import { replaceSlash } from '../App';
import { removeQuestion } from '../App';

export const InputSearchDropdown = ({ search, handleCloseSearchDropdown }) => {

  return (
    <ul className="inputSearchDropdown">
      {search.map(el => {
  
        return (
          <Link 
            // eslint-disable-next-line max-len
            to={`${el.type === 'questions' ? '' : `/${el.type}`}/${replaceSlash(removeQuestion(el.title))}`}
            key={el.title} 
            onClick={handleCloseSearchDropdown}
          >
            <li 
              className="inputSearchDropdown__item" 
            >
              {el.title}
            </li>  
          </Link>
        );
      })}
    </ul>
  );
};