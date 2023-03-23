import React from 'react';
import { Link } from 'react-router-dom';
import { PageNavigation } from '../components/PageNavigation';

export const AboutPage = () => {
  return (
    <>
      <div className="container">
        <PageNavigation />
      </div>
      
      <div className="page">
        <div className="container">
          <div className=" aboutPages">
            <h1 className="page__title aboutPages__title">
              Що таке «Глобал Гід Сервіс» ?
            </h1>
            <div className="aboutPages__content">
              <p>
              ТОВ «Глобал Гід Сервіс», це продукт який було розроблено юристами 
              в міграційній галузі та покликаний спростити перебування іноземних
              громадян, які проживають в Україні, планують проживати в Україні,
              або планують візит до Україні з будь яких інших намірів.
              </p>
              
              <p>
                Наші юристи, маючи досвід роботи з питань пов'язаних с 
                перебуванням іноземців в Україні постаралися наділити 
                даний ресурс максимально корисними функціями за для
                безпеки іноземних громадян в Україні.
              </p>
              
              <div>
                <p className="aboutPages__listTitle">
                  Так за допомоги даного ресурсу Ви зможете:
                </p>
                <ul>
                  <li>
                  Спілкуватись в глобал чаті зі своїми співвітчизниками, які 
                  проживають або проживали в Україні та напряму ділитися
                  корисною інформацією стосовно перебування в Україні
                  та будь якою іншою інформацією
                  </li>
                  <li>
                  Будете в курсі всіх актуальних міграційних новин
                  </li>
                  <li>
                  Зможете знайти актуальну інформацію: як отримати громадянство
                  України або посвідку на постійне чи тимчасове перебування в
                  Україні, як отримати статус Біженця та багато іншої
                  корисної інформації
                  </li>
                  <li>
                  Дізнаєтесь, як безпечно проходити прикордонний та митний
                  контроль, як при в’їзді в Україну, так і при виїзді з України
                  </li>
                  <li>
                  Зможете дистанційно отримати довідку про наявність 
                  або відсутність заборони на вїзд/виїзд до/з України
                  </li>
                  <li>
                  Також Ви зможете моніторити за заданими параметрами свої
                  данні в державних реєстрах України, що застереже Вас від
                  скоєння адміністративних правопорушень, які можуть мати
                  негативні наслідки у вигляді заборони на в’їзд до України.
                  Система автоматично Вас оповістить, якщо Ви отримаєте штраф
                  за порушення правил дорожнього руху, якщо термін Вашого
                  безвізового перебування буде добігати кінця, якщо Ваш 
                  документ для легального перебування в Україні з будь яких 
                  причин буде включено до бази недійсних, якщо відносно Вас 
                  буде відкрито виконавче провадження чи будь яка судова 
                           справа, та ще багато іншого.
                  </li>
                </ul>
              </div>
              
              <p>
                Система своєчасно сповістить Вас про наявність в реєстрах
                інформації яка в подальшому може негативно вплинути на Ваше
                перебування в Україні і Ви своєчасно зможете відреагувати 
                на неї, що унеможливе настання будь яких негативних наслідків.
              </p>
            </div>
            <button className="button-extension button-extension--down">
              <Link to="/news">
                <p>Останні новини</p>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};