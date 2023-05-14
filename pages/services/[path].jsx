import { useTranslation } from 'next-i18next';
import { ItemPage } from '../../components/ItemPage';
import { PageNavigation } from '../../components/PageNavigation';
import { getCollectionWhereKeyValue } from '../../helpers/firebaseControl';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { getRightData } from '../../helpers/rightData';
import { useRouter } from 'next/router';
import { Layout } from '../../components/Layout';

export default function ServiceItemPage ({ serviceItem }) {

  const { t }  = useTranslation();
  const { locale } = useRouter();

  console.log(serviceItem);

  return (
    <Layout
      type='serviceItem page'
      title={`${serviceItem[0].serviceType[locale]}: ${getRightData(serviceItem[0], locale, 'title')}`}
      desctiption={`${serviceItem[0].serviceType[locale]}: ${getRightData(serviceItem[0], locale, 'title')} - ${t('head.service.desc1')}${getRightData(serviceItem[0], locale, 'title')} - ${t('head.service.desc2')}`}
    >
      <div className="container">
        <PageNavigation title={`${serviceItem[0].serviceType[locale]}: ${getRightData(serviceItem[0], locale, 'title')}`} />
      </div>
      <div className="page page-bigBottom">
        <div className="container">
          <ItemPage 
            buttonName={t('services.allServices')} 
            item={serviceItem[0]} 
            linkPath="/services"
          />
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps({ params, locale }) {
  const serviceItem = await getCollectionWhereKeyValue('services', 'path', params.path);
  return { props: { serviceItem,
    ...await serverSideTranslations(locale, ['common'])
  }};
}