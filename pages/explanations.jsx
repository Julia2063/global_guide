import { useTranslation } from 'next-i18next';
import { Explanation } from '../components/Explanation';
import { PageNavigation } from '../components/PageNavigation';

import explanations from '../api/explanations.json';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Layout } from '../components/Layout';

import styles from '../styles/homePage.module.scss';

export default function ExplanationsPage () {

  const { t }  = useTranslation();

  return (
    <Layout
      type='service page'
      title={t('navbar.explanations')}
      desctiption={`⭐${t('navbar.explanations')}⭐ ${t('head.home.description')}`  }
    >
      <div className="container">
        <PageNavigation />
      </div>

      <div className="page"> 
        <div className="container">
          <h1 className="page__title page__titleWithBottom">
            {t('explanations.explanations')}
          </h1>
          <div className={styles.homePage__explanation}>
            
            {explanations.map(explanation => 
              <Explanation 
                item={explanation}
                key={explanation.id}
              />
            )}
          </div>
          
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