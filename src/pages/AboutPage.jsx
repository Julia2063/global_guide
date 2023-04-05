import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { PageNavigation } from '../components/PageNavigation';

import { rightTitle } from '../helpers/rightData';
import { convertJsonToHTML } from '../helpers/convertJsonToHTML';

import aboutPage from '../api/aboutPage.json';


export const AboutPage = () => {
  const { t, i18n }  = useTranslation();
  return (
    <>
      <div className="container">
        <PageNavigation />
      </div>
      
      <div className="page">
        <div className="container">
          <div className="itemPage">
            <h1 className="page__title itemPage__title">
              {rightTitle(aboutPage, i18n.language)}
            </h1>
            <article className="itemPage__text">
              {i18n.language === 'ua' 
                && (convertJsonToHTML(aboutPage.textUA || {}))}
              {i18n.language === 'ru'
                 && (convertJsonToHTML(aboutPage.textRU || {}))}
              {i18n.language === 'en' 
                && (convertJsonToHTML(aboutPage.textEN || {}))}
            </article>
            
          </div>
          <button className="button-extension button-extension--down">
            <Link to="/news">
              <p>{t('newsPage.button')}</p>
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};