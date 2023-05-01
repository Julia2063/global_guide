import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import { useTranslation } from 'react-i18next';
import { convertJsonToHTML } from '../helpers/convertJsonToHTML';
import imgo from '../assets/img/news.jpg';

import { rightTitle, rightTitle2 } from '../helpers/rightData';

export const ItemPage = ({ item, buttonName, linkPath }) => {
  const { 
    /* img, */ 
    textEN, 
    textRU, 
    textUA,
  } = item;

  const { i18n }  = useTranslation();

  return (
    <div className="itemPage">
      <div className="itemPage__img">
        <img src={imgo} alt="img"  />
      </div>
      

      {/* <img src={img} alt="img" />
       Это правильный код, чтобы картинка бралась из api! */} 

      <div className="itemPage__body">
        <h1 className="page__title itemPage__title">
          {rightTitle2(item, i18n.language) 
            ? rightTitle2(item, i18n.language) 
            : rightTitle(item, i18n.language)
          }
        </h1>
        <article className="itemPage__text">
          {i18n.language.split('-')[0] === 'ua'
            && (convertJsonToHTML(textUA || {}))}
          {i18n.language.split('-')[0] === 'ru' 
            && (convertJsonToHTML(textRU || {}))}
          {i18n.language.split('-')[0] === 'en' 
            && (convertJsonToHTML(textEN || {}))}
        </article>
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