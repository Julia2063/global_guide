import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useTranslation } from 'react-i18next';
import { ItemPage } from '../components/ItemPage';
import { PageNavigation } from '../components/PageNavigation';

import news from '../api/newsApi.json';

export const NewsItemPage = () => {
  const [newsItem, setNewsItem] = useState({text:[]});
  const { slug } = useParams();

  const { t }  = useTranslation();

  useEffect(() => {
    const currentNews = news.find(el => 
      el.path === slug);

    if (currentNews) {
      setNewsItem(currentNews);
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
            buttonName={t('newsPage.button')} 
            item={newsItem} 
            linkPath="/news"
          />
        </div>
      </div>
    </>
  );
};