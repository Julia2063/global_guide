import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

export const Explanation = ({ title, text }) => {
  const location = useLocation();

  return (
    <div className="explanation">
      <h2 className="page__title-2 explanation__title">
        {title}
      </h2>
      <div className="explanation__text">
        {text}
      </div>
      <button className="button explanation__button">
        <Link 
          to={location.pathname.includes('/explanations') 
            ? title 
            : `/explanations/${title}`} >
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