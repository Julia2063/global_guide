import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

export const Explanation = ({ title, text, path }) => {
  const location = useLocation();

  return (
    <div className="explanation">
      <h3 className="page__title-2 explanation__title">
        {title}
      </h3>
      <div className="explanation__text">
        <p>{text}</p> 
      </div>
      <button className="button explanation__button">
        <Link 
          to={location.pathname.includes('/explanations') 
            ? path
            : `/explanations/${path}`} >
          <p>Читати більше</p>
        </Link>
      </button>
      
    </div>
  );
};

Explanation.propType = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
};