import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { ItemPage } from '../components/ItemPage';
import { PageNavigation } from '../components/PageNavigation';
import { replaceSlash } from '../App';
import { removeQuestion } from '../App';

import servises from '../api/servises.json';

export const ServiseItemPage = () => {
  const [serviseItem, setServiseItem] = useState({text:[]});
  const { slug } = useParams();

  

  useEffect(() => {
    const currentServise = servises.find(el => 
      replaceSlash(removeQuestion(el.title)) === slug
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
            buttonName="Усі послуги" 
            item={serviseItem} 
            linkPath="/services"
          />
        </div>
      </div>
    </>
  );
};