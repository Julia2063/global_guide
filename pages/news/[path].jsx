import { useTranslation } from 'next-i18next';
import { ItemPage } from '../../components/ItemPage';
import { PageNavigation } from '../../components/PageNavigation';
import { getCollectionWhereKeyValue } from '../../helpers/firebaseControl';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { getRightData } from '../../helpers/rightData';
import { useRouter } from 'next/router';
import { Layout } from '../../components/Layout';

export default function NewsItemPage ({ newItem }) {

  const { t }  = useTranslation();
  const { locale } = useRouter();

  return (
    <Layout
      type='news page'
      title={getRightData(newItem[0], locale, 'title')}
      desctiption={`${t('head.news.new')} ${getRightData(newItem[0], locale, 'title')} ${t('head.news.inSite')}`}

    >
      <div className="container">
        <PageNavigation title={getRightData(newItem[0], locale, 'title')} />
      </div>
      <div className="page page-bigBottom">
        <div className="container">
          <ItemPage 
            buttonName={t('newsPage.button')} 
            item={newItem[0]} 
            linkPath="/news"
          />
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps({ params, locale }) {
  const newItem = await getCollectionWhereKeyValue('news', 'path', params.path);
  return { props: { newItem,
    ...await serverSideTranslations(locale, ['common'])
  } };
}