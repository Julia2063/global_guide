import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useTranslation } from 'react-i18next';
import { ItemPage } from '../components/ItemPage';
import { PageNavigation } from '../components/PageNavigation';

import explanations from '../api/explanations.json';

export const ExplanationsItemPage = () => {
  const [explanationsItem, setExplanationsItem] = useState({text:[]});
  const { slug } = useParams();

  const { t }  = useTranslation();


  useEffect(() => {
    const currenteExplanation 
    = explanations.find(el => el.path === slug);

    if (currenteExplanation) {
      setExplanationsItem(currenteExplanation);
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
            buttonName={t('explanations.allExplanations')} 
            item={explanationsItem} 
            linkPath="/explanations"
          />
        </div>
      </div>
    </>
  );
};