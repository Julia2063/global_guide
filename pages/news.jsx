import { PageNavigation } from '../components/PageNavigation';
import { NewsItem } from '../components/NewsItem';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Layout } from '../components/Layout';
import { useTranslation } from 'next-i18next';

import styles from '../styles/newsPage.module.scss';
import { getCollection } from '../helpers/firebaseControl';

export default function NewsPage ({ news }) {
  const { t }  = useTranslation();
  return (
    <Layout
      type='service page'
      desctiption={`⭐${t('navbar.news')}⭐ ${t('head.home.description')}`  }
      h1={t('navbar.news')}
    >
      <div className="container">
        <PageNavigation />
      </div>

      <div className="page page-bigBottom">
        <div className="container">
          <div className={styles.newsPage}>
            {news.sort((a, b) => {
              return new Date(b.dateCreating) - new Date(a.dateCreating);
            }).map(el => {
              return (
                <NewsItem item={el} key={el.id} />
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};


export async function getServerSideProps({ locale }) {

  const news = await getCollection('news');
  return { props: { news,
    ...await serverSideTranslations(locale, ['common'])
  } };
}