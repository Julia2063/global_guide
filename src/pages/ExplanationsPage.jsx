import React from 'react';
import { Explanation } from '../components/Explanation';
import { PageNavigation } from '../components/PageNavigation';

export const ExplanationsPage = () => {
  return (
    <>
      <div className="container">
        <PageNavigation />
      </div>

      <div className="page"> 
        <div className="container">
          <h1 className="page__title explanationsPage__title">Роз'яснення</h1>
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
    </>
  );
};