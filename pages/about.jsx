import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { PageNavigation } from '../components/PageNavigation';

import { rightTitle } from '../helpers/rightData';
import { convertJsonToHTML } from '../helpers/convertJsonToHTML';

import aboutPage from '../api/aboutPage.json';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Layout } from '../components/Layout';

import styles from '../styles/itemPage.module.scss';

export default function AboutPage () {
  const { t }  = useTranslation();

  const { locale } = useRouter();
  return (
    <Layout
      type='service page'
      title={t('navbar.about')}
      desctiption={`⭐${t('navbar.about')}⭐ ${t('head.home.description')}`  }
    >
      <div className="container">
        <PageNavigation />
      </div>
      
      <div className="page">
        <div className="container">
        <div className={styles.itemPage}>
        <h1 className={`page__title ${styles.itemPage__title}`}>
              {rightTitle(aboutPage, locale)}
            </h1>
            <article className={styles.itemPage__text}>
              {locale === 'ua' 
                && (convertJsonToHTML(aboutPage.textUA || {}))}
              {locale === 'ru'
                 && (convertJsonToHTML(aboutPage.textRU || {}))}
              {locale === 'en' 
                && (convertJsonToHTML(aboutPage.textEN || {}))}
            </article>
            
          </div>
          <button className="button-extension button-extension--down">
            <Link href="/news">
              <p>{t('newsPage.button')}</p>
            </Link>
          </button>
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps({ locale }) {
	return {
		props: {
			...(await serverSideTranslations(locale, ['common'])),
		},
	}
}