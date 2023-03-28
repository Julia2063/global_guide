import React from 'react';
import { useLocation, Link, useParams } from 'react-router-dom';

import services from '../api/services.json';
import explanations from '../api/explanations.json';
import questions from '../api/questions.json';
import news from '../api/newsApi.json';

export const PageNavigation = () => {
  const location = useLocation();
  
  const pathnames = location.pathname.split('/').filter(el => el);

  const { slug } = useParams();

  const findTitle = () => {
    switch(pathnames[0]) {
    case 'news':
      return news.find(el => el.path === slug)?.title;

    case 'services':
      return services.find(el => el.path === slug)?.title;

    case 'explanations':
      return explanations.find(el => el.path === slug)?.title;
      
    default:
      return questions.find(el => el.path === slug)?.title;
    }
  };
  
  return (
    <ul className="pageNavigation">
      <li>
        <Link to="/">
          <p>Головна</p> 
        </Link>
      </li>

      {pathnames.map((pathname, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;
        const currentLocation = () => {
          switch (pathname) {
          case 'services':
            return 'Послуги';

          case 'chat':
            return 'Global чат';

          case 'news':
            return 'Новини';

          case '/about':
            return 'Про GGS';

          case  'explanations':
            return 'Poз\'яснення';

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
