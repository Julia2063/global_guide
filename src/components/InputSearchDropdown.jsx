import React from 'react';
import { Link } from 'react-router-dom';

export const InputSearchDropdown = ({ search, handleCloseSearchDropdown }) => {

  return (
    <ul className="inputSearchDropdown">
      {search.map(el => {
  
        return (
          <Link 
            // eslint-disable-next-line max-len
            to={`${el.type === 'questions' ? '' : `/${el.type}`}/${el.path}`}
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