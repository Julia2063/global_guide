import { signOut } from 'firebase/auth';
import { auth } from '../helpers/firebaseControl';
import { useRouter } from 'next/router';

import styles from '../styles/adminPanel.module.scss';
import { useEffect, useState } from 'react';

import { Modal } from '../components/Modal';
import { InformationForm } from '../components/InformationForm';


export default function AdminPanel () {
  const [isModal, setIsModal] = useState(false);
  const [titleMessage, setTitleMessage] = useState('');
  const [type, setType] = useState('');
  const [currentInfoItem, setCurrentInfoItem] = useState(null);
  const [func, setFunc] = useState('updateInfo');

  const handleModal = () => {
    setIsModal(!isModal);
  };

  const router = useRouter();

  const handleSignOut = () => {
    signOut(auth).then(() => {
    router.push('/')
    }).catch((error) => {
      alert(error);
    });
    };

  const handleClick = (e, collection) => {
    setCurrentInfoItem(null);
    setIsModal(true);
    setTitleMessage(`Добавить ${collection}`);
    setType(e.currentTarget.name);
    setFunc('addItem');
  };

 

  const handleClickCategory = (category) => {
    router.push(`/adminPanel/${category}`);
  };

  return (
    <div className={styles.main}>
      <h1>Панель администратора</h1>
      <div className={styles.body}>
        <div className={styles.body__item}> 
            <div 
              className={styles.body__item__content}
              onClick={() => handleClickCategory('news')}
            >
              Новости
            </div>
  
          <button 
            name="news"
            className={styles.body__item__button}
            onClick={(e) => handleClick(e, 'новость')}
          >
            +
          </button>
        </div>

        <div className={styles.body__item}> 
            <div 
              className={styles.body__item__content}
              onClick={() => handleClickCategory('questions')}
            >
              Вопросы
            </div>
  
          <button 
            name="questions"
            className={styles.body__item__button}
            onClick={(e) => handleClick(e, 'вопрос')}
          >
            +
          </button>
        </div>

        <div className={styles.body__item}> 
            <div 
              className={styles.body__item__content}
              onClick={() => handleClickCategory('explanations')}
            >
              Ссылки
            </div>
  
          <button 
            name="explanations"
            className={styles.body__item__button}
            onClick={(e) => handleClick(e, 'ссылку')}
          >
            +
          </button>
        </div>

        <div className={styles.body__item}> 
            <div 
              className={styles.body__item__content}
              onClick={() => handleClickCategory('services')}
            >
              Услуги
            </div>
  
          <button 
            name="services"
            className={styles.body__item__button}
            onClick={(e) => handleClick(e, 'услугу')}
          >
            +
          </button>
        </div>

       {/*  <div className={styles.body__item}> 
          <div className={styles.body__item__content}>
            <p>Вопросы</p>
            <CustomeSwiper 
              array={questions}
              handleModalUpdate={handleModalUpdate}
              handleDelete={handleDelete}
              
            />
          </div>
          <button
            name="questions"
            className={styles.body__item__button}
            onClick={(e) => handleClick(e, 'вопрос')}
          >
            +
          </button>
        </div>

        <div className={styles.body__item}> 
          <div className={styles.body__item__content}>
            <p>Разъяснения</p>
            <CustomeSwiper 
              array={explanations}
              handleModalUpdate={handleModalUpdate}
              handleDelete={handleDelete}
            />
          </div>
          <button
            name="explanations"
            className={styles.body__item__button}
            onClick={(e) => handleClick(e, 'разьяснение')}
          >
            +
          </button>
        </div>

        <div className={styles.body__item}> 
          <div className={styles.body__item__content}>
            <p>Услуги</p>
            <CustomeSwiper 
              array={services.filter(el => el.id !== '147406030952')}
              handleModalUpdate={handleModalUpdate}
              handleDelete={handleDelete}
            />
          </div>
          <button
            name="services"
            className={styles.body__item__button}
            onClick={(e) => handleClick(e, 'услугу')}
          >
            +
          </button>
        </div>

        <div className={styles.body__item}> 
          <div className={styles.body__item__content}>
            <p>Гражданство (услуги)</p>
            <CustomeSwiper 
              array={citizenship}
              handleModalUpdate={handleModalUpdate}
              handleDelete={handleDelete}
            />
          </div>
          <button
            name="citizenship"
            className={styles.body__item__button}
            onClick={(e) => handleClick(e, 'гражданство')}
          >
            +
          </button>
        </div> */}

      </div>
      <button 
        className={styles.logout}
        onClick={handleSignOut}
      >
        Выход
      </button>

      {isModal && (
        <Modal
          title={titleMessage}
          handleModal={handleModal}
          form={
            <InformationForm 
              type={type}
              setIsModal={handleModal}
              currentInfoItem={currentInfoItem}
              func={func}
            />
          }
        />
      )}
    </div>
  )
}