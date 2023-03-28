import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import classNames from 'classnames';

export const Form = ({ formFunction, isRegistration, handleSubmit }) => { 
  
  const [regInfo, setRegInfo] = useState({});

  const handleChange = (fieldName, newValue) => {
    const newRegInfo = {
      ...regInfo,
      [fieldName]: newValue,
    };

    setRegInfo(newRegInfo);
  };

  return (
    <form className="form">
      <div className="form__buttons">
        <Link to="/account" className={classNames(
          'form__toggle-button', 
          {'form__toggle-button--active' : formFunction === 'account'}
        )}>
          <p>Вхід</p> 
        </Link>

        <Link to="/registration"
          className={classNames(
            'form__toggle-button', 
            {'form__toggle-button--active' : formFunction === 'registration'}
          )}
        >
          <p>Реєстрація</p> 
        </Link>
      </div>
      <div className="form__inputs">
        {isRegistration && (
          <input 
            type="tel" 
            className="form__input" 
            placeholder="Телефон" 
            onChange={(event) => 
              handleChange('phoneNumber', event.target.value)}
            required
          />
        )}
        <input 
          type="email" 
          className="form__input" 
          placeholder="Email"  
          required
          onChange={(event) => handleChange('email', event.target.value)}
        />
        <input 
          type="password" 
          className="form__input" 
          placeholder="Пароль" 
          required
          onChange={(event) => handleChange('password', event.target.value)}
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
        onClick={(e) => {
          handleSubmit(e, regInfo);
        }}
      >
        {isRegistration ? 'Зареєструватися' : 'Увійти'}
      </button>

      {!isRegistration && (
        <button className="form__forget">
          <p>Забули пароль?</p> 
        </button>
      )}
      
    </form>
  );
};

Form.propType = {
  formFunction: PropTypes.string.isRequired , 
  isRegistration : PropTypes.bool, 
  handleSubmit: PropTypes.func.isRequired,
};