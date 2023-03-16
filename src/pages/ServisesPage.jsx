import React from 'react';
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


export const ServisesPage = () => {
  const borderControl = ['в\'їзд в Україну', 'Виїзд з України', 'Докладніше'];
  const customControl = ['В\'їзд в Україну', 'Bиїзд з України', '≠'];
  const entryBan = ['Детальніше', 'Дізнатися, чи є заборона'];
  const deportation = ['Детальніше'];
  // eslint-disable-next-line max-len
  const legalization = ['Громадянство України', 'Постійний дозвіл на проживання в Україні', 'Тимчасовий дозвіл на проживання в Україні', 'Докладніше'];
  // eslint-disable-next-line max-len
  const docService = ['Страхування онлайн', 'Переклад документів онлайн', 'Довідка про відсутність/наявність/заборону на в\'їзд/виїзд/у /з/ Україн/у/и/ онлайн', 'Довідка про відсутність судимості онлайн', 'Довідка, що підтверджує громадянство України онлайн', 'Докладніше'];
  const monitoring = ['Безвізовий калькулятор', '...', '...', '...'];
  return (
    <>
      <div className="container">
        <PageNavigation />
      </div>
      
      <div className="page page-bigBottom">
        <div className="container">
          <div className="servisesPage__content">
            <div className="servisesPage__section">
              <ServisesButton img={menu} title="Всі послуги" />
              <ServisesButton img={ukr} title="Громадянам України" />
              <ServisesButton img={earth} title="Іноземцям" />
            </div>

            <div className="servisesPage__section">
              <ServisesDropdown 
                img={control} 
                title="Проходження прикордонного&nbsp;контролю"
                values={borderControl}
              />
              <ServisesDropdown 
                img={muto} 
                title="Проходження митного контролю"
                values={customControl}
              />
              <ServisesDropdown 
                img={ban} 
                title="Заборона на в'їзд в Україну"
                values={entryBan}
              />
              <ServisesDropdown 
                img={dep}
                title="Депортація з України"
                values={deportation}
              />
            </div>
            <div className="servisesPage__section">
              <ServisesDropdown 
                img={leg}
                title="Легалізація в Україні"
                values={legalization}
              />
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