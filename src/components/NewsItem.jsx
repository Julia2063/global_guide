import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import imgo from '../assets/img/news.jpg';

export const NewsItem = ({ newsItem }) => {
  const { /* img, */ title, text, path } = newsItem;

  return (
    <>
      <div className="newsItem onDesktop">
        <div className="newsItem__img">
          <img src={imgo} alt="img" />
        </div>
        

        {/* <img src={img} alt="img" />
     Это правильный код, чтобы картинка бралась из api! */}

        <div className="newsItem__body">
          <h3 className="page__title-2 newsItem__title">
            {title}
          </h3>
          <p className="newsItem__text">
            {text[0]}
          </p>
          <button className="button newsItem__button onDesktop">
            <Link to={path}>
              <p>Читати більше</p>
            </Link>
          </button>
        </div>


      </div>
      
      
      <div className="newsItem onMobile">
        <Link to={path}>
          <div className="newsItem__img">
            <img src={imgo} alt="img" />
          </div>

          {/* <img src={img} alt="img" />
     Это правильный код, чтобы картинка бралась из api! */}

          <div className="newsItem__body">
            <h3 className="page__title-2 newsItem__title">
              {title}
            </h3>
            <p className="newsItem__text">
              {text[0]}
            </p>
          </div>
        </Link>
      </div>
    
    </>
  );
};

NewsItem.propType = {
  newsItem: PropTypes.object.isRequired,
};