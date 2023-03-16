import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { ItemPage } from '../components/ItemPage';
import { PageNavigation } from '../components/PageNavigation';

import news from '../api/newsApi.json';

export const NewsItemPage = () => {
  const [newsItem, setNewsItem] = useState({text:[]});
  const { slug } = useParams();

  useEffect(() => {
    const currentNews = news.find(el => el.title === slug);

    if (currentNews) {
      setNewsItem(currentNews);
    }
  }, []);

  return (
    <>
      <div className="container">
        <PageNavigation />
      </div>
      <div className="page page-bigBottom">
        <div className="container">
          <ItemPage 
            buttonName="Останні новини" 
            item={newsItem} 
            linkPath="/news"
          />
        </div>
      </div>
    </>
  );
};