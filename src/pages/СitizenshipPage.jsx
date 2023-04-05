import React from 'react';
import { PageNavigation } from '../components/PageNavigation';

import { NewsItem } from '../components/NewsItem';

import citizenship from '../api/citizenship.json';

export const CitizenshipPage = () => {
  return (
    <>
      <div className="container">
        <PageNavigation />
      </div>

      <div className="page page-bigBottom">
        <div className="container">
          <div className="newsPage">
            {citizenship.map(el => {
              return (
                <NewsItem item={el} key={el.id} />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};