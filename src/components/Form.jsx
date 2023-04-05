import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import classNames from 'classnames';

export const Form = ({ formFunction, isRegistration, handleSubmit }) => { 
  
  const [regInfo, setRegInfo] = useState({});
  const { t }  = useTranslation();

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
          <p>{t('form.entry')}</p> 
        </Link>

        <Link to="/registration"
          className={classNames(
            'form__toggle-button', 
            {'form__toggle-button--active' : formFunction === 'registration'}
          )}
        >
          <p>{t('form.register')}</p> 
        </Link>
      </div>
      <div className="form__inputs">
        {isRegistration && (
          <input 
            type="tel" 
            className="form__input" 
            placeholder={t('form.phone')} 
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
          placeholder={t('form.password')} 
          required
          onChange={(event) => handleChange('password', event.target.value)}
        />
      </div>
      
      {!isRegistration && (
        <label className="form__checkbox-label">
          <input type="checkbox" />
          <span>{t('form.rememberMe')} </span>
        </label>
      )}
      
      <button 
        type="submit" 
        className="button form__button"
        onClick={(e) => {
          handleSubmit(e, regInfo);
        }}
      >
        {isRegistration ? t('form.signUp') : t('form.logIn')}
      </button>

      {!isRegistration && (
        <button className="form__forget">
          <p>{t('form.forget')}</p> 
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