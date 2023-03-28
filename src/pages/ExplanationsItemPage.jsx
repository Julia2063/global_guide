import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { ItemPage } from '../components/ItemPage';
import { PageNavigation } from '../components/PageNavigation';

import explanations from '../api/explanations.json';

export const ExplanationsItemPage = () => {
  const [explanationsItem, setExplanationsItem] = useState({text:[]});
  const { slug } = useParams();


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
            buttonName="Усі poз'яснення" 
            item={explanationsItem} 
            linkPath="/explanations"
          />
        </div>
      </div>
    </>
  );
};