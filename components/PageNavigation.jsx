import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { getRightData, rightTitle } from '../helpers/rightData';

import services from '../api/services.json';
import explanations from '../api/explanations.json';
import questions from '../api/questions.json';
import news from '../api/newsApi.json';
import citizenship from '../api/citizenship.json';
import { useRouter } from 'next/router';

import styles from '../styles/pageNavigation.module.scss'; 

export const PageNavigation = ({ title }) => {
  const { pathname, query, locale } = useRouter();
  const { t }  = useTranslation();

  console.log(query);

  
  const pathnames = pathname.split('/').filter(el => el);

  return (
    <ul className={styles.pageNavigation}>
      <li>
        <Link href="/">
          <p>{t(t('pageNavigation.main'))}</p> 
        </Link>
      </li>

      {pathnames.map((el, index) => {
        console.log(el);
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;
        const currentLocation = () => {
          switch (el) {
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
          <li key={pathname + index}>
            <p>{' / '}</p>
            <p className={styles.pageNavigation__navigation}>
              {Object.values(query).length !== 0 ? `${title}` : `${currentLocation()}`}
            </p>
          </li>
        ) : (
          <li key={pathname}>
            <p>
              <Link  href={routeTo}>
                {`/ ${currentLocation()}`}
              </Link>
            </p>
          </li> 
        );
      })}
    </ul>
  );
};
