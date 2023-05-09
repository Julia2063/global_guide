import Link from 'next/link';
import { useTranslation } from 'next-i18next';

import { rightTitle } from '../helpers/rightData';
import { useRouter } from 'next/router';

import styles from '../styles/explanation.module.scss'; 

export const Explanation = ({ item }) => {
  const { textEN, textRU, textUA, path } = item;
  const { pathname, locale }= useRouter();
  const { t }  = useTranslation();


  return (
    <div className={styles.explanation}>
      <div className={`page__title-2 ${styles.explanation__title}`}>
        {rightTitle(item, locale)}
      </div>
      <div className={styles.explanation__text}>
      {item.ru?.text}
      </div>
      <button className={`button ${styles.explanation__button}`}>
        <Link 
          href={pathname.includes('/explanations') 
            ? path
            : `/explanations/${path}`} >
          <p>{t('explanations.readMore')}</p>
        </Link>
      </button>
      
    </div>
  );
};