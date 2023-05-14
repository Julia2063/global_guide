import { useTranslation } from 'next-i18next';
import { ItemPage } from '../../../components/ItemPage';
import { PageNavigation } from '../../../components/PageNavigation';
import { getCollectionWhereKeyValue } from '../../../helpers/firebaseControl';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { getRightData } from '../../../helpers/rightData';
import { useRouter } from 'next/router';
import { Layout } from '../../../components/Layout';

export default function CitizenshipItemPage ({ citizenshipItem }) {

  const { t }  = useTranslation();
  const { locale } = useRouter();

  return (
    <Layout
      type='serviceItem page'
      title={getRightData(citizenshipItem[0], locale, 'title')}
      desctiption={`${getRightData(citizenshipItem[0], locale, 'title')} - ${t('head.service.desc1')}${getRightData(citizenshipItem[0], locale, 'title')} - ${t('head.service.desc2')}`}
    >
      <div className="container">
        <PageNavigation title={getRightData(citizenshipItem[0], locale, 'title')} />
      </div>
      <div className="page page-bigBottom">
        <div className="container">
          <ItemPage 
            buttonName={t('services.allServices')} 
            item={citizenshipItem[0]} 
            linkPath="/services"
          />
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps({ params, locale }) {
  const citizenshipItem = await getCollectionWhereKeyValue('citizenship', 'path', params.path);
  return { props: { citizenshipItem,
    ...await serverSideTranslations(locale, ['common'])
  }};
}