import { useTranslation } from 'next-i18next';
import { ItemPage } from '../../components/ItemPage';
import { PageNavigation } from '../../components/PageNavigation';
import { getCollectionWhereKeyValue } from '../../helpers/firebaseControl';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { getRightData } from '../../helpers/rightData';
import { useRouter } from 'next/router';
import { Layout } from '../../components/Layout';

export default function ExplanationItemPage ({ explanationItem }) {

  const { t }  = useTranslation();
  const { locale } = useRouter();

  return (
    <Layout
      type='post page'
      title={getRightData(explanationItem[0], locale, 'title')}
      desctiption={`${t('head.post.desc')} ${getRightData(explanationItem[0], locale, 'title')} ${t('head.news.inSite')}`}

    >
      <div className="container">
        <PageNavigation title={getRightData(explanationItem[0], locale, 'title')} />
      </div>
      <div className="page page-bigBottom">
        <div className="container">
          <ItemPage 
            buttonName={t('explanations.allExplanations')} 
            item={explanationItem[0]} 
            linkPath="/explanations"
          />
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps({ params, locale }) {
  const explanationItem = await getCollectionWhereKeyValue('explanations', 'path', params.path);
  return { props: { explanationItem,
    ...await serverSideTranslations(locale, ['common'])
  }};
}