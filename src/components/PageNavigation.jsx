import React from 'react';
import { useLocation, Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { rightTitle } from '../helpers/rightData';

import services from '../api/services.json';
import explanations from '../api/explanations.json';
import questions from '../api/questions.json';
import news from '../api/newsApi.json';
import citizenship from '../api/citizenship.json';


export const PageNavigation = () => {
  const location = useLocation();
  const { t, i18n }  = useTranslation();

  
  const pathnames = location.pathname.split('/').filter(el => el);

  const { slug } = useParams();

  const findTitle = () => {
    if (pathnames[1] === 'lehalizatsiia-v-ukraini-hromadianstvo') {
      return rightTitle(citizenship
        .find(el => el.path === slug), i18n.language
      );
    };
    
    switch(pathnames[0]) {
    case 'news':
      return rightTitle(news.find(el => el.path === slug), i18n.language);

    case 'services':
      return rightTitle(services.find(el => el.path === slug), i18n.language);

    case 'explanations':
      return  rightTitle(explanations
        .find(el => el.path === slug), i18n.language
      );
      
    default:
      return rightTitle(questions.find(el => el.path === slug), i18n.language);
    }

    
  };
  
  return (
    <ul className="pageNavigation">
      <li>
        <Link to="/">
          <p>{t(t('pageNavigation.main'))}</p> 
        </Link>
      </li>

      {pathnames.map((pathname, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;
        const currentLocation = () => {
          switch (pathname) {
          case 'services':
            return t('navbar.services');

          case 'chat':
            return t('navbar.chat');

          case 'news':
            return t('navbar.news');

          case 'about':
            return t('navbar.about');

          case  'explanations':
            return t('navbar.explanations');

          case 'lehalizatsiia-v-ukraini-hromadianstvo':
            return t('citizenship.title');

          default:
            return pathname;
          }
        };
        return isLast ? (
          <li key={pathname}>
            <p>{' / '}</p>
            <p className="pageNavigation__navigation">
              {slug ? `${findTitle()}` : `${currentLocation()}`}
            </p>
          </li>
        ) : (
          <li key={pathname}>
            <p>
              <Link  to={routeTo}>
                {`/ ${currentLocation()}`}
              </Link>
            </p>
          </li> 
        );
      })}
    </ul>
  );
};
