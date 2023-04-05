import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { PageNavigation } from '../components/PageNavigation';

import { ServisesDropdown } from '../components/ServisesDropdown';
import { ServisesButton } from '../components/ServisesButton';
import { rightTitle } from '../helpers/rightData';

import menu from '../assets/icons/ServisesPage/menu.svg';
import control from '../assets/icons/ServisesPage/control.svg';
import muto from '../assets/icons/ServisesPage/muto.svg';
import ban from '../assets/icons/ServisesPage/ban.svg';
import ukr from '../assets/icons/ServisesPage/ukr.svg';
import earth from '../assets/icons/ServisesPage/earth.svg';
import dep from '../assets/icons/ServisesPage/dep.svg';
import leg from '../assets/icons/ServisesPage/leg.svg';
import doc from '../assets/icons/ServisesPage/doc.svg';
import monitor from '../assets/icons/ServisesPage/monitor.svg';

import services from '../api/services.json';

const splitTwoPoints = (string) => {
  const i = string.indexOf(':');
  return string.slice(i + 2);
};


export const ServisesPage = () => {
  const { t, i18n }  = useTranslation();

  const borderControl = services
    .filter(service => rightTitle(service, i18n.language).includes(
      t('services.borderControl')
    )).map(service => splitTwoPoints(rightTitle(service, i18n.language)));

  const customControl = services
    .filter(service => rightTitle(service, i18n.language).includes(
      t('services.customControl')
    )).map(service => splitTwoPoints(rightTitle(service, i18n.language)));

  const entryBan = services
    .filter(service => rightTitle(service, i18n.language).includes(
      t('services.ban')
    )).map(service => splitTwoPoints(rightTitle(service, i18n.language)));

  const deportation = services
    .filter(service => rightTitle(service, i18n.language).includes(
      t('services.deportation')
    )).map(service => splitTwoPoints(rightTitle(service, i18n.language)));
  
  const legalization = services
    .filter(service => rightTitle(service, i18n.language).includes(
      t('services.legalization')
    )).map(service => splitTwoPoints(rightTitle(service, i18n.language)));

  const docService = services
    .filter(service => rightTitle(service, i18n.language).includes(
      t('services.document')
    )).map(service => splitTwoPoints(rightTitle(service, i18n.language)));

  const monitoring = services
    .filter(service => rightTitle(service, i18n.language).includes(
      t('services.monitoring')
    )).map(service => splitTwoPoints(rightTitle(service, i18n.language)));

  const [isAllButtons, setIsAllButtons] = useState(false);
  const [filter, setFilter] = useState(t('services.allServices'));

  const openAllButtons = () => {
    setIsAllButtons(!isAllButtons);
  };

  const changeFilter = (title) => {
    setFilter(title);
    openAllButtons();
  };

  useEffect (() => {
    setFilter(t('services.allServices'));
  }, [t]);
  

  return (
    <>
      <div className="container">
        <PageNavigation pageType={'servises'}/>
      </div>
      
      <div className="page page-bigBottom">
        <div className="container">
          <div className="servisesPage__content">
            <div className="servisesPage__section">
              <ServisesButton 
                img={menu} 
                title={filter}
                
                onClick={openAllButtons}
              />
              {(isAllButtons && filter === t('services.allServices')) && (
                <>
                  <ServisesButton 
                    img={ukr} 
                    title={t('services.citizens')} 
                    onClick={() => changeFilter(t('services.citizens'))}
                  />
                  <ServisesButton 
                    img={earth} 
                    title={t('services.foreigners')}
                    onClick={() => changeFilter(t('services.foreigners'))}
                  />
                </>
              )}
              
              {(isAllButtons && filter === t('services.foreigners')) && (
                <>
                  <ServisesButton 
                    img={ukr} 
                    title={t('services.citizens')} 
                    onClick={() => changeFilter(t('services.citizens'))}
                  />
                  <ServisesButton 
                    img={menu} 
                    title={t('services.allServices')}
                    onClick={() => changeFilter(t('services.allServices'))}
                  />
                </>
              )}

              {(isAllButtons && filter === t('services.citizens')) && (
                <>
                  <ServisesButton 
                    img={earth} 
                    title={t('services.foreigners')} 
                    onClick={() => changeFilter(t('services.foreigners'))}
                  />
                  <ServisesButton 
                    img={menu} 
                    title={t('services.allServices')} 
                    onClick={() => changeFilter(t('services.allServices'))}
                  />
                </>
              )}
            </div>

            <div className="servisesPage__section">

              <ServisesDropdown 
                img={control} 
                title={t('services.borderControl')}
                values={borderControl}
              />

              <ServisesDropdown 
                img={muto} 
                title={t('services.customControl')}
                values={customControl}
              />

              {filter !== t('services.citizens') && (
                <ServisesDropdown 
                  img={ban} 
                  title={t('services.ban')}
                  values={entryBan}
                />
              )}
              
              {filter !== t('services.citizens') && (
                <ServisesDropdown 
                  img={dep}
                  title={t('services.deportation')}
                  values={deportation}
                />
              )}
            </div>
            <div className="servisesPage__section">
              {filter !== t('services.citizens') && (
                <ServisesDropdown 
                  img={leg}
                  title={t('services.legalization')}
                  values={legalization}
                />
              )}
              

              <ServisesDropdown 
                img={doc} 
                title={t('services.document')}
                values={docService}
              />

              <ServisesDropdown 
                img={monitor} 
                title={t('services.monitoring')}
                values={monitoring}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};