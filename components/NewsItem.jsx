import PropTypes from 'prop-types';

import Link from 'next/link';

import { useTranslation } from 'next-i18next';
import { getRightData } from '../helpers/rightData';
import { useRouter } from 'next/router';

import styles from '../styles/newsItem.module.scss';

export const NewsItem = ({ item }) => {
  const { t }  = useTranslation();
  const { locale } = useRouter();

  return (
    <>
      <div className={`${styles.newsItem} onDesktop`}>
        <div className={styles.newsItem__img}>
        {item.image.length > 0 && (
            <img src={item.image} alt="img" />
        )}
        </div>
        
        <div className={styles.newsItem__body}>
          <div className={`page__title-2 ${styles.newsItem__title}`}>
            {getRightData(item, locale, 'title')}
          </div>
          <p className={styles.newsItem__text}>
            {getRightData(item, locale, 'preview')}
          </p>
          <button className={`button ${styles.newsItem__button} onDesktop`}>
            <Link 
              href='/news/[path]' as={`/news/${item.path}`}
            >
              <p>{t('explanations.readMore')}</p>
            </Link>
          </button>
        </div>


      </div>
      
      
      <div className={`${styles.newsItem} onMobile`}>
        <Link
           href={'/news/[path]'} as={`/news/${item.path}`}
         >
          <div className={styles.newsItem__img}>
            {item.image.length > 0 && <img src={item.image} alt="img" />}
          </div>

          <div className={styles.newsItem__body}>
            <div className={`page__title-2 ${styles.newsItem__title}`}>
              {getRightData(item, locale, 'title')}
            </div>
            <p className={styles.newsItem__text}>
            {getRightData(item, locale, 'preview')}
            </p>
          </div>
        </Link>
      </div>
    
    </>
  );
};

NewsItem.propType = {
  newsItem: PropTypes.object.isRequired,
};