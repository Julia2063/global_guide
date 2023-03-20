import React from 'react';
import { useLocation, Link, useParams } from 'react-router-dom';

export const PageNavigation = () => {
  const location = useLocation();
  
  const pathnames = location.pathname.split('/').filter(el => el);

  const { slug } = useParams();

  console.log(slug);
  
  return (
    <ul className="pageNavigation">
      <li>
        <Link to="/">
            Головна
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
            {' / '}
            <p className="pageNavigation__navigation">
              {slug ? slug : currentLocation()}
            </p>
          </li>
        ) : (
          <li key={pathname}>
            <Link  to={routeTo}>
              {`/ ${currentLocation()}`}
            </Link>
          </li> 
        );
      })}
    </ul>
  );
};
