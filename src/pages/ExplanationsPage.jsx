import React from 'react';
import { Link } from 'react-router-dom';
import { Explanation } from '../components/Explanation';
import { PageNavigation } from '../components/PageNavigation';

import explanations from '../api/explanations.json';

export const ExplanationsPage = () => {
  return (
    <>
      <div className="container">
        <PageNavigation />
      </div>

      <div className="page"> 
        <div className="container">
          <h1 className="page__title explanationsPage__title">Роз'яснення</h1>
          <div className="homePage__explanation">
            
            {explanations.map(explanation => 
              <Explanation 
                title={explanation.title} 
                text={explanation.text} 
                key={explanation.title}
              />
            )}

            <button className="button onMobile homePage__allButton">
              <Link to="/explanations">
                <p>Всі Роз'яснення</p>
              </Link>
            </button>
          </div>
          
        </div>
      </div>
    </>
  );
};