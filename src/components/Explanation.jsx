import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { convertJsonToHTML } from '../helpers/convertJsonToHTML';

export const Explanation = ({ item }) => {
  const { titleEN, titleRU, titleUA, textEN, textRU, textUA, path } = item;
  const location = useLocation();
  const { t, i18n }  = useTranslation();


  return (
    <div className="explanation">
      <h3 className="page__title-2 explanation__title">
        {i18n.language === 'en' && titleEN}
        {i18n.language === 'ru' && titleRU}
        {i18n.language === 'ua' && titleUA}
      </h3>
      <div className="explanation__text">
        {i18n.language === 'en' && convertJsonToHTML(textEN)}
        {i18n.language === 'ru' && convertJsonToHTML(textRU)}
        {i18n.language === 'ua' && convertJsonToHTML(textUA)}
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