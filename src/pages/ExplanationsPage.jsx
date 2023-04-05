import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Explanation } from '../components/Explanation';
import { PageNavigation } from '../components/PageNavigation';

import explanations from '../api/explanations.json';

export const ExplanationsPage = () => {
  const { t }  = useTranslation();
  return (
    <>
      <div className="container">
        <PageNavigation />
      </div>

      <div className="page"> 
        <div className="container">
          <h1 className="page__title explanationsPage__title">
            {t('explanations.explanations')}
          </h1>
          <div className="homePage__explanation">
            
            {explanations.map(explanation => 
              <Explanation 
                item={explanation}
                key={explanation.id}
              />
            )}

            <button className="button onMobile homePage__allButton">
              <Link to="/explanations">
                <p></p>
              </Link>
            </button>
          </div>
          
        </div>
      </div>
    </>
  );
};