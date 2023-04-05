import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useTranslation } from 'react-i18next';
import { ItemPage } from '../components/ItemPage';
import { PageNavigation } from '../components/PageNavigation';

import services from '../api/services.json';

export const ServiseItemPage = () => {
  const [serviseItem, setServiseItem] = useState({text:[]});
  const { slug } = useParams();

  const { t, i18n }  = useTranslation();

  useEffect(() => {
    const currentServise = services.find(el => 
      el.path === slug
    );

    if (currentServise) {
      setServiseItem(currentServise);
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
            buttonName={t('services.allServices')}
            item={serviseItem} 
            linkPath="/services"
          />
        </div>
      </div>
    </>
  );
};