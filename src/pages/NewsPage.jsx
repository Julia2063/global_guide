import React from 'react';
import { PageNavigation } from '../components/PageNavigation';
import { NewsItem } from '../components/NewsItem';

import news from '../api/newsApi.json';

export const NewsPage = () => {
  return (
    <>
      <div className="container">
        <PageNavigation />
      </div>

      <div className="page page-bigBottom">
        <div className="container">
          <div className="newsPage">
            {news.map(el => {
              return (
                <NewsItem newsItem={el} key={el.title} />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};