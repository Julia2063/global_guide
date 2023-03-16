import React from 'react';
import { Link } from 'react-router-dom';

import imgo from '../assets/img/news.jpg';

export const NewsItem = ({ newsItem }) => {
  const { /* img, */ title, text } = newsItem;

  return (
    <>
      <div className="newsItem onDesktop">
        <div className="newsItem__img">
          <img src={imgo} alt="img" />
        </div>
        

        {/* <img src={img} alt="img" />
     Это правильный код, чтобы картинка бралась из api! */}

        <div className="newsItem__body">
          <h2 className="page__title-2 newsItem__title">
            {title}
          </h2>
          <p className="newsItem__text">
            {text[0]}
          </p>
          <button className="button newsItem__button onDesktop">
            <Link to={title}>
              <p>Читати більше</p>
            </Link>
          </button>
        </div>


      </div>
      
      
      <div className="newsItem onMobile">
        <Link to={title}>
          <div className="newsItem__img">
            <img src={imgo} alt="img" />
          </div>

          {/* <img src={img} alt="img" />
     Это правильный код, чтобы картинка бралась из api! */}

          <div className="newsItem__body">
            <h2 className="page__title-2 newsItem__title">
              {title}
            </h2>
            <p className="newsItem__text">
              {text[0]}
            </p>
          </div>
        </Link>
      </div>
    
    </>
  );
};