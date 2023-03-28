import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { ItemPage } from '../components/ItemPage';
import { PageNavigation } from '../components/PageNavigation';

import questions from '../api/questions.json';

export const QuestionsItemPage = () => {
  const [questionItem, setQuestionItem] = useState({text:[]});
  const { slug } = useParams();

  

  useEffect(() => {
    const currentQuestion 
     = questions.find(el => el.path === slug);

    if (currentQuestion) {
      setQuestionItem(currentQuestion);
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
            buttonName="На головну" 
            item={questionItem} 
            linkPath="/home"
          />
        </div>
      </div>
    </>
  );
};