import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { PageNavigation } from '../components/PageNavigation';

import aboutPage from '../api/aboutPage.json';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Layout } from '../components/Layout';

import styles from '../styles/itemPage.module.scss';
import { getRightData } from '../helpers/rightData';

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
              {getRightData(aboutPage, locale, "title")}
            </h1>
            <article 
              className={styles.itemPage__text}
              dangerouslySetInnerHTML={{ __html:  getRightData(aboutPage, locale, 'text')}}
            />
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