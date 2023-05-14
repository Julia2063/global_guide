import { useTranslation } from 'next-i18next';
import { ItemPage } from '../../components/ItemPage';
import { PageNavigation } from '../../components/PageNavigation';
import { getCollectionWhereKeyValue } from '../../helpers/firebaseControl';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { getRightData } from '../../helpers/rightData';
import { useRouter } from 'next/router';
import { Layout } from '../../components/Layout';

export default function QuestionsItemPage ({ questionItem }) {

  const { t }  = useTranslation();
  const { locale } = useRouter();

  return (
    <Layout
      type='post page'
      title={getRightData(questionItem[0], locale, 'title')}
      desctiption={`${t('head.post.desc')} ${getRightData(questionItem[0], locale, 'title')} ${t('head.news.inSite')}`}

    >
      <div className="container">
        <PageNavigation title={getRightData(questionItem[0], locale, 'title')} />
      </div>
      <div className="page page-bigBottom">
        <div className="container">
          <ItemPage 
            buttonName={t('homePage.questions.home')} 
            item={questionItem[0]} 
            linkPath="/"
          />
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps({ params, locale }) {
  const questionItem = await getCollectionWhereKeyValue('questions', 'path', params.path);
  return { props: { questionItem,
    ...await serverSideTranslations(locale, ['common'])
  }};
}