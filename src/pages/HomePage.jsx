import React, { useContext, useMemo, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { BannerDropdown } from '../components/BannerDropdown';
import { DropdownWithText } from '../components/DropdownWithText';
import { Explanation } from '../components/Explanation';
import { AppContext } from '../components/AppProvider';

import questions from '../api/questions.json';
import explanations from '../api/explanations.json';

export const HomePage = () => {
  const [filterValue, setFilterValue] = useState({
    personType: '',
    serviseType: '',
  });
  const { t, i18n }  = useTranslation();

  const valuesPersonType = useMemo(() => {
    switch (filterValue.personType) {
    case 'Ukrainian citizens':
      return [t('services.foreigners')];

    case 'Foreigners':
      return [t('services.citizens')];

    default:
      return [t('services.citizens'), t('services.foreigners')];
    };
      
  }, [filterValue.personType, t]) ;

  const valuesServiseType = useMemo(() => {
    switch (filterValue.personType) {
    case 'Ukrainian citizens':
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
  }, [i18n.language]);

  const { user } = useContext(AppContext);

  console.log(user);
 
  return (
    <>
      <div className="banner">
        <div className="container">
          <h1 className="banner__title">
            {t('homePage.banner.h1')}
          </h1>
          <div className="banner__dropdowns">
            <div className="banner__label">
              <div className="banner__label-title">
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

            <div className="banner__label">
              <div className="banner__label-title">
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
            <button className="button banner__button">
              <p>{t('homePage.banner.go')}</p>
            </button>
          </div>
        </div>
      </div>
      <div className="homePage">
        <div className="page">
          <section className="container">
          
            <div className="page__title-with-extension homePage__title">
              <h2 className="page__title">{t('homePage.faq')}</h2>
              <button className="button-extension onDesktop">
                <p>{t('homePage.aq')}</p>
              </button>
            </div>
            <div className="homePage__questions">
              {questions.map(question => 
                <DropdownWithText
                  item={question}
                  key={question.id} 
                />
              )}

              <button className="button onMobile homePage__allButton">
                <p>{t('homePage.aq')}</p>
              </button>

            </div>
          </section>
        </div>
        <div className="separator onDesktop" />
        <div className="page"> 
          <section className="container">
            <div className="page__title-with-extension homePage__title">
              <h2 className="page__title">{t('explanations.explanations')}</h2>
              <button className="button-extension onDesktop">
                <Link to="/explanations">
                  <p>{t('explanations.allExplanations')}</p>
                </Link>
              </button>
            </div>
            <div className="homePage__explanation">

              {explanations.map(explanation => 
                <Explanation 
                  item={explanation}
                  key={explanation.id}
                />
              )}

              <button className="button onMobile homePage__allButton">
                <Link to="/explanations">
                  <p>{t('explanations.allExplanations')}</p>
                </Link>
              </button>
            </div>
          
          </section>
        </div>
      </div>
    </>
  );
};