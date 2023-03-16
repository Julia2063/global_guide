import React from 'react';
import { useLocation } from 'react-router-dom';

export const PageNavigation = () => {
  const location = useLocation();
  
  const currentLocation = () => {
    switch (true) {
    case location.pathname.includes('/services'):
      return 'Послуги';

    case location.pathname.includes('/chat'):
      return 'Global чат';

    case location.pathname.includes('/news'):
      return 'Новини';

    case  location.pathname.includes('/about'):
      return 'Про GGS';
    case  location.pathname.includes('/explanations'):
      return 'Poз\'яснення';

    default:
      return;
    }
  };

  return (
    <div className="pageNavigation">
      <div>
        Головна / 
      </div>
      <div className="pageNavigation__navigation">
        {currentLocation()}
      </div>
    </div>
  );
};