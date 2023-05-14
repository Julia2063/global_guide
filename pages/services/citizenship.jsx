import { PageNavigation } from '../../components/PageNavigation';

import { NewsItem } from '../../components/NewsItem';
import { getCollection } from '../../helpers/firebaseControl';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import styles from '../../styles/newsPage.module.scss';
import { Layout } from '../../components/Layout';
import { useTranslation } from 'next-i18next';

export default function CitizenshipPage ( { citizenship }) {

  const { t } = useTranslation();

  return (
    <Layout
      type='service page'
      desctiption={`⭐${t('citizenship.button')}⭐ ${t('head.home.description')}`  }
      h1={t('citizenship.button')}>
      <div className="container">
        <PageNavigation />
      </div>

      <div className="page page-bigBottom">
        <div className="container">
          <div className={styles.newsPage}>
            {citizenship.map(el => {
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

    const citizenship = await getCollection('citizenship');
    return { props: { citizenship,
      ...await serverSideTranslations(locale, ['common'])
    } };
  }