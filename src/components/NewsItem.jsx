import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { rightTitle, rightPreview } from '../helpers/rightData';

import imgo from '../assets/img/news.jpg';

export const NewsItem = ({ item }) => {
  const { /* img, */path } = item;
  const { t, i18n }  = useTranslation();

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
            {rightTitle(item, i18n.language)}
          </h3>
          <p className="newsItem__text">
            {rightPreview(item, i18n.language)}
          </p>
          <button className="button newsItem__button onDesktop">
            <Link to={path}>
              <p>{t('explanations.readMore')}</p>
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
              {rightTitle(item, i18n.language)}
            </h3>
            <p className="newsItem__text">
              {rightPreview(item, i18n.language)}
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