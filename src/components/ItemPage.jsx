import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import imgo from '../assets/img/news.jpg';

export const ItemPage = ({ item, buttonName, linkPath }) => {
  const { /* img, */ title, text } = item;

  return (
    <div className="itemPage">
      <div className="itemPage__img">
        <img src={imgo} alt="img"  />
      </div>
      

      {/* <img src={img} alt="img" />
       Это правильный код, чтобы картинка бралась из api! */} 

      <div className="itemPage__body">
        <h1 className="page__title itemPage__title">
          {title}
        </h1>
        {text.map(el => (
          <p className="itemPage__text" key={el}>
            {el}
          </p>  
        ))}
        <button className="button-extension button-extension--down">
          <Link to={linkPath}>
            <p>{buttonName}</p>
          </Link>
        </button>
      </div>
    </div>
  );
};

ItemPage.propType = {
  item: PropTypes.object.isRequired, 
  buttonName: PropTypes.string,
  linkPath: PropTypes.string,
};