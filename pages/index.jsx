import { useMemo, useState, useEffect } from 'react';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Layout } from "../components/Layout";
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { BannerDropdown } from '../components/BannerDropdown';
import { DropdownWithText } from '../components/DropdownWithText';
import { Explanation } from '../components/Explanation';
import { useRouter } from 'next/router';

import styles from '../styles/banner.module.scss'; 
import stylesHome from '../styles/homePage.module.scss'; 
import { getCollection } from '../helpers/firebaseControl';

export default function HomePage({ questions, explanations }) {
	const [filterValue, setFilterValue] = useState({
		personType: '',
		serviseType: '',
	  });
	  const { t }  = useTranslation();
	  const { locale } = useRouter();
	
	  const valuesPersonType = useMemo(() => {
		switch (filterValue.personType) {
		case t('services.citizens'):
		  return [t('services.foreigners')];
	
		case  t('services.foreigners'):
		  return [t('services.citizens')];
	
		default:
		  return [t('services.citizens'), t('services.foreigners')];
		};
		  
	  }, [filterValue.personType, t]) ;
	
	  const valuesServiseType = useMemo(() => {
		switch (filterValue.personType) {
		case t('services.citizens'):
		  return [
			t('services.borderControl'),
			t('services.customControl'),
			t('services.ban'),
			t('services.monitoring'),
		  ];
	  
		default:
		  return [
			t('services.borderControl'),
			t('services.customControl'),
			t('services.ban'),
			t('services.deportation'),
			t('services.legalization'),
			t('services.document'),
			t('services.monitoring'),
		  ];
		}
	  }, [filterValue.personType, t]);
	
	  useEffect(() => {

		setFilterValue({
		  personType: '',
		  serviseType: '',
		});
	  }, [locale]);

	return (
	  <Layout 
      type='home'
      title={t('head.home.title')}
      desctiption={t('head.home.description')}
      h1={t('head.home.h1')}
    >
      <div className={styles.banner}>
        <div className="container">
          <h2 className={styles.banner__title}>
            {t('homePage.banner.h1')}
          </h2>
          <div className={styles.banner__dropdowns}>
            <div className={styles.banner__label}>
              <div className={styles.banner__label__title}>
                {t('homePage.banner.label_title1')} 
              </div>
              <BannerDropdown
                title={t('homePage.banner.bannerDropdown.title1')}
                values={valuesPersonType}
                dropdownValue={filterValue.personType}
                setDropdownValue={(e) =>
                  setFilterValue({...filterValue, personType: e})}
              />
            </div>

            <div className={styles.banner__label}>
              <div className={styles.banner__label__title}>
                {t('homePage.banner.label_title2')}
              </div>
              <BannerDropdown
                title={t('homePage.banner.bannerDropdown.title2')}
                values={valuesServiseType}
                dropdownValue={filterValue.serviseType}
                setDropdownValue={(e) =>
                  setFilterValue({...filterValue, serviseType: e})}
              />
            </div>
            <button className={`button ${styles.banner__button}`}  >
              <p>{t('homePage.banner.go')}</p>
            </button>
          </div>
        </div>
      </div>
      <div className={stylesHome.homePage}>
        <div className="page">
          <section className="container">
          
            <div className={`${stylesHome.homePage__title} page__title-with-extension`}>
              <h3 className="page__title">{t('homePage.faq')}</h3>
              <button className="button-extension onDesktop">
                <p>{t('homePage.aq')}</p>
              </button>
            </div>
            <div className={stylesHome.homePage__questions}>
              {questions.slice(0, 5).map(question => 
                <DropdownWithText
                  item={question}
                  key={question.id} 
                />
              )}

              <button className={`button onMobile ${stylesHome.homePage__allButton}`}>
                <p>{t('homePage.aq')}</p>
              </button>

            </div>
          </section>
        </div>
        <div className="separator onDesktop" />
        <div className="page"> 
          <section className="container">
            <div className={`${stylesHome.homePage__title} page__title-with-extension`}>
              <h3 className="page__title">{t('explanations.explanations')}</h3>
              <button className="button-extension onDesktop">
                <Link href="/explanations">
                  <p>{t('explanations.allExplanations')}</p>
                </Link>
              </button>
            </div>
            <div className={stylesHome.homePage__explanation}>

              {explanations.slice(0, 6).map(explanation => 
                <Explanation 
                  item={explanation}
                  key={explanation.id}
                />
              )}

              <button className={`button onMobile ${stylesHome.homePage__allButton}`}>
                <Link href="/explanations">
                  <p>{t('explanations.allExplanations')}</p>
                </Link>
              </button>
            </div>
          
          </section>
        </div>
      </div>
	</Layout>
	);
}

export async function getServerSideProps({ locale }) {

  const questions = await getCollection('questions');
  const explanations = await getCollection('explanations');
  return { props: { questions, explanations,
    ...await serverSideTranslations(locale, ['common'])
  } };
}
