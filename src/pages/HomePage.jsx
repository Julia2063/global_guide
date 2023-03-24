import React, { useContext, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { BannerDropdown } from '../components/BannerDropdown';
import { DropdownWithText } from '../components/DropdownWithText';
import { Explanation } from '../components/Explanation';
import { UserContext } from '../components/UserProvider';

import questions from '../api/questions.json';
import explanations from '../api/explanations.json';

export const HomePage = () => {
  const [filterValue, setFilterValue] = useState({
    personType: '',
    serviseType: '',
  });

  const valuesPersonType = useMemo(() => {
    switch (filterValue.personType) {
    case 'Громадянам України':
      return ['Іноземцям'];

    case 'Іноземцям':
      return ['Громадянам України'];

    default:
      return ['Громадянам України', 'Іноземцям'];
    }
  }, [filterValue.personType]) ;

  const valuesServiseType = useMemo(() => {
    switch (filterValue.personType) {
    case 'Громадянам України':
      return [
        'Проходження прикордонного контролю',
        'Проходження митного контролю',
        'Заборона на в\'їзд в Україну',
        'Моніторинг',
      ];
  
    default:
      return [
        'Проходження прикордонного контролю',
        'Проходження митного контролю',
        'Заборона на в\'їзд в Україну',
        'Депортація з України',
        'Легалізація в Україні',
        'Документ сервіс',
        'Моніторинг',
      ];
    }
  }, [filterValue.personType]);

  const { user } = useContext(UserContext);

  console.log(user);
 
  return (
    <>
      <div className="banner">
        <div className="container">
          <h1 className="banner__title">
          Послуги для іноземних громадян
          </h1>
          <div className="banner__dropdowns">
            <div className="banner__label">
              <div className="banner__label-title">
                Я шукаю послуги для
              </div>
              <BannerDropdown
                title="Вибрати"
                values={valuesPersonType}
                dropdownValue={filterValue.personType}
                setDropdownValue={(e) =>
                  setFilterValue({...filterValue, personType: e})}
              />
            </div>

            <div className="banner__label">
              <div className="banner__label-title">
                Тип послуги
              </div>
              <BannerDropdown
                title="Вкажіть тип послуги"
                values={valuesServiseType}
                dropdownValue={filterValue.serviseType}
                setDropdownValue={(e) =>
                  setFilterValue({...filterValue, serviseType: e})}
              />
            </div>
            <button className="button banner__button">
              <p>Перейти</p>
            </button>
          </div>
        </div>
      </div>
      <div className="homePage">
        <div className="page">
          <div className="container">
          
            <div className="page__title-with-extension homePage__title">
              <h1 className="page__title">Найчастіші запитання</h1>
              <button className="button-extension onDesktop">
                <p>Всі запитання</p>
              </button>
            </div>
            <div className="homePage__questions">
              {questions.map(question => 
                <DropdownWithText
                  title={question.title} 
                  text={question.text}
                  key={question.title} 
                />
              )}

              <button className="button onMobile homePage__allButton">
                <p>Всі запитання</p>
              </button>

            </div>
          </div>
        </div>
        <div className="separator onDesktop" />
        <div className="page"> 
          <div className="container">
            <div className="page__title-with-extension homePage__title">
              <h1 className="page__title">Роз'яснення</h1>
              <button className="button-extension onDesktop">
                <Link to="/explanations">
                  <p>Всі роз'яснення</p>
                </Link>
              </button>
            </div>
            <div className="homePage__explanation">

              {explanations.map(explanation => 
                <Explanation 
                  title={explanation.title} 
                  text={explanation.text} 
                  key={explanation.title}
                />
              )}

              <button className="button onMobile homePage__allButton">
                <Link to="/explanations">
                  <p>Всі Роз'яснення</p>
                </Link>
              </button>
            </div>
          
          </div>
        </div>
      </div>
    </>
  );
};