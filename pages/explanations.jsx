import { useTranslation } from 'next-i18next';
import { Explanation } from '../components/Explanation';
import { PageNavigation } from '../components/PageNavigation';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Layout } from '../components/Layout';

import styles from '../styles/homePage.module.scss';
import { getCollection } from '../helpers/firebaseControl';

export default function ExplanationsPage ({  explanations }) {

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
  const explanations = await getCollection('explanations');
	return {
		props: { explanations,
			...(await serverSideTranslations(locale, ['common'])),
		},
	}
}