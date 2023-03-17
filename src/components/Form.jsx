import classNames from 'classnames';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Form = ({ formFunction, isRegistration, handleSubmit }) => { 
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="form">
      <div className="form__buttons">
        <Link to="/account" className={classNames(
          'form__toggle-button', 
          {'form__toggle-button--active' : formFunction === 'account'}
        )}>
          Вхід
        </Link>

        <Link to="/registration"
          className={classNames(
            'form__toggle-button', 
            {'form__toggle-button--active' : formFunction === 'registration'}
          )}
        >
          Реєстрація
        </Link>
      </div>
      <div className="form__inputs">
        {isRegistration && (
          <input type="tel" className="form__input" placeholder="Телефон" />
        )}
        <input 
          type="email" 
          className="form__input" 
          placeholder="Email"  
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input 
          type="password" 
          className="form__input" 
          placeholder="Пароль" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      
      {!isRegistration && (
        <label className="form__checkbox-label">
          <input type="checkbox" />
          <span>Запам’ятати мене</span>
        </label>
      )}
      
      <button 
        type="submit" 
        className="button form__button"
        onClick={() => {
          handleSubmit(email, password);
          setEmail('');
          setPassword('');
        }}
      >
        {isRegistration ? 'Зареєструватися' : 'Увійти'}
      </button>

      {!isRegistration && (
        <button className="form__forget">
        Забули пароль?
        </button>
      )}
      
    </div>
  );
};