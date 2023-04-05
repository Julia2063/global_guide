import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { PageNavigation } from '../components/PageNavigation';
import { rightTitle } from '../helpers/rightData';
import { convertJsonToHTML } from '../helpers/convertJsonToHTML';

import chatPage from '../api/chatPage.json';

export const ChatPage = () => {
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
              {rightTitle(chatPage, i18n.language)}
            </h1>
            <article className="itemPage__text">
              {i18n.language === 'ua' 
                && (convertJsonToHTML(chatPage.textUA || {}))}
              {i18n.language === 'ru'
                 && (convertJsonToHTML(chatPage.textRU || {}))}
              {i18n.language === 'en' 
                && (convertJsonToHTML(chatPage.textEN || {}))}
            </article>

            
          </div>
          <button className="button-extension  chatPage__button">
            <Link to="/">
              <p>{t('chatPage.button')}</p>
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};