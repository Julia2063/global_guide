import React, { useState } from 'react';
import { PageNavigation } from '../components/PageNavigation';

import { ServisesDropdown } from '../components/ServisesDropdown';
import { ServisesButton } from '../components/ServisesButton';

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

import servises from '../api/servises.json';

const splitTwoPoints = (string) => {
  const i = string.indexOf(':');
  return string.slice(i + 2);
};


export const ServisesPage = () => {
  const borderControl = servises
    .filter(servise => servise.title.includes(
      'Проходження прикордонного контролю'
    )).map(servise => splitTwoPoints(servise.title));

  const customControl = servises
    .filter(servise => servise.title.includes(
      'Проходження митного контролю'
    )).map(servise => splitTwoPoints(servise.title));

  const entryBan = servises
    .filter(servise => servise.title.includes(
      'Заборона на в\'їзд в Україну'
    )).map(servise => splitTwoPoints(servise.title));

  const deportation = servises
    .filter(servise => servise.title.includes(
      'Депортація з України'
    )).map(servise => splitTwoPoints(servise.title));
  
  const legalization = servises
    .filter(servise => servise.title.includes(
      'Легалізація в Україні'
    )).map(servise => splitTwoPoints(servise.title));

  const docService = servises
    .filter(servise => servise.title.includes(
      'Документ сервіс'
    )).map(servise => splitTwoPoints(servise.title));

  const monitoring = servises
    .filter(servise => servise.title.includes(
      'Моніторинг'
    )).map(servise => splitTwoPoints(servise.title));

  const [isAllButtons, setIsAllButtons] = useState(false);
  const [filter, setFilter] = useState('Всі послуги');

  const openAllButtons = () => {
    setIsAllButtons(!isAllButtons);
  };

  const changeFilter = (title) => {
    setFilter(title);
    openAllButtons();
  };

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
              {(isAllButtons && filter === 'Всі послуги') && (
                <>
                  <ServisesButton 
                    img={ukr} 
                    title="Громадянам України" 
                    onClick={() => changeFilter('Громадянам України')}
                  />
                  <ServisesButton 
                    img={earth} 
                    title="Іноземцям" 
                    onClick={() => changeFilter('Іноземцям')}
                  />
                </>
              )}
              
              {(isAllButtons && filter === 'Іноземцям') && (
                <>
                  <ServisesButton 
                    img={ukr} 
                    title="Громадянам України" 
                    onClick={() => changeFilter('Громадянам України')}
                  />
                  <ServisesButton 
                    img={menu} 
                    title="Всі послуги" 
                    onClick={() => changeFilter('Всі послуги')}
                  />
                </>
              )}

              {(isAllButtons && filter === 'Громадянам України') && (
                <>
                  <ServisesButton 
                    img={earth} 
                    title="Іноземцям" 
                    onClick={() => changeFilter('Іноземцям')}
                  />
                  <ServisesButton 
                    img={menu} 
                    title="Всі послуги" 
                    onClick={() => changeFilter('Всі послуги')}
                  />
                </>
              )}
            </div>

            <div className="servisesPage__section">

              <ServisesDropdown 
                img={control} 
                title="Проходження прикордонного контролю"
                values={borderControl}
              />

              <ServisesDropdown 
                img={muto} 
                title="Проходження митного контролю"
                values={customControl}
              />

              {filter !== 'Громадянам України' && (
                <ServisesDropdown 
                  img={ban} 
                  title="Заборона на в'їзд в Україну"
                  values={entryBan}
                />
              )}
              
              {filter !== 'Громадянам України' && (
                <ServisesDropdown 
                  img={dep}
                  title="Депортація з України"
                  values={deportation}
                />
              )}
            </div>
            <div className="servisesPage__section">
              {filter !== 'Громадянам України' && (
                <ServisesDropdown 
                  img={leg}
                  title="Легалізація в Україні"
                  values={legalization}
                />
              )}
              

              <ServisesDropdown 
                img={doc} 
                title="Документ сервіс"
                values={docService}
              />

              <ServisesDropdown 
                img={monitor} 
                title="Моніторинг"
                values={monitoring}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};