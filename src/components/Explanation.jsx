import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { convertJsonToHTML } from '../helpers/convertJsonToHTML';
import { rightTitle } from '../helpers/rightData';

export const Explanation = ({ item }) => {
  const { textEN, textRU, textUA, path } = item;
  const location = useLocation();
  const { t, i18n }  = useTranslation();


  return (
    <div className="explanation">
      <h3 className="page__title-2 explanation__title">
        {rightTitle(item, i18n.language)}
      </h3>
      <div className="explanation__text">
        {i18n.language.split('-')[0] === 'ua'
          && (convertJsonToHTML(textUA || {}))}
        {i18n.language.split('-')[0] === 'ru' 
          && (convertJsonToHTML(textRU || {}))}
        {i18n.language.split('-')[0] === 'en' 
          && (convertJsonToHTML(textEN || {}))}
      </div>
      <button className="button explanation__button">
        <Link 
          to={location.pathname.includes('/explanations') 
            ? path
            : `/explanations/${path}`} >
          <p>{t('explanations.readMore')}</p>
        </Link>
      </button>
      
    </div>
  );
};

Explanation.propType = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
};