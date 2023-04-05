import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useTranslation } from 'react-i18next';
import { ItemPage } from '../components/ItemPage';
import { PageNavigation } from '../components/PageNavigation';

import citizenship from '../api/citizenship.json';

export const CitizenshipItemPage = () => {
  const [citizenshipItem, setCitizenshipItem] = useState({text:[]});
  const { slug } = useParams();

  const { t }  = useTranslation();

  useEffect(() => {
    const currentCitizenchip = citizenship.find(el => 
      el.path === slug);

    if (currentCitizenchip) {
      setCitizenshipItem(currentCitizenchip);
    }
  }, [slug]);

  return (
    <>
      <div className="container">
        <PageNavigation />
      </div>
      <div className="page page-bigBottom">
        <div className="container">
          <ItemPage 
            buttonName={t('citizenship.button')} 
            item={citizenshipItem} 
            linkPath="/services/lehalizatsiia-v-ukraini-hromadianstvo"
          />
        </div>
      </div>
    </>
  );
};