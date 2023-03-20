import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { BannerDropdown } from '../components/BannerDropdown';
import { DropdownWithText } from '../components/DropdownWithText';
import { Explanation } from '../components/Explanation';

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
              <DropdownWithText 
                title="Як отримати громадянство України?"
                text="Правовий зміст громадянства України, 
                підстави і порядок його набуття та припинення,
                повноваження органів державної влади,
                що беруть участь у вирішенні питань громадянства
                України, порядок оскарження рішень з питань громадянства,
                дій чи бездіяльності органів державної влади, їх посадових 
                і службових осіб визначає Закон України «Про громадянство 
                України» від 18.01.2001 р."
              />
              <DropdownWithText 
                title="Постійний вид на проживання"
              />
              <DropdownWithText 
                title="Навчання іноземних громадян в Україні"
              />
              <DropdownWithText 
                title="Як дізнатися, що реєстрація у черзі пройшла успішно?"
              />
              <DropdownWithText 
                title="Я здійснив(ла) онлайн-оплату, як отримати квитанцію?"
              />

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
              <Explanation 
                title="Відповіді на часті запитання у період воєнного стану"
                text="Відповіді на часті запитання громадян,
              стосовно роботи органів Державної міграційної
              служби України, у період воєного стану."
              />
              <Explanation 
                title="Важлива інформація для органів реєстрації"
                text="1 грудня 2021 року набрав чинності Закон України від 5
              листопада 2021 року № 1871-IX «Про надання публічних (електронних
              публічних) послуг щодо декларування…"
              />
              <Explanation
                title="Декларування місця проживання та реєстрація місця
              проживання (перебування) особи"
                text="1 грудня 2021 року набрав чинності Закон України від 
              5 листопада 2021 року № 1871-IX «Про надання публічних 
              (електронних публічних) послуг щодо..." />
              <Explanation 
                title="Інформація для громадян України, які переселилися 
              із тимчасово окупованої території України"
                text="Інформація для вимушених переселенців із зони 
              проведення Антитерористичної операції на території 
              Донецької та Луганської областей..."
              />
              <Explanation 
                title="Важлива інформація для органів реєстрації"
                text="1 грудня 2021 року набрав чинності Закон України 
              від 5 листопада 2021 року № 1871-IX «Про надання публічних
              (електронних публічних) послуг щодо декларування…." 
              />
              <Explanation 
                title="Важлива інформація для органів реєстрації"
                text="1 грудня 2021 року набрав чинності Закон України від 5 
              листопада 2021 року № 1871-IX «Про надання публічних 
              (електронних публічних) послуг щодо декларування…"
              />

              <button className="button onMobile homePage__allButton">
                <p>Всі Роз'яснення</p>
              </button>
            </div>
          
          </div>
        </div>
      </div>
    </>
  );
};