import React from 'react';
import { Form } from '../components/Form';

export const RegistrationPage = () => {
  return (
    <div className="page page-bigBottom">
      <div className="container">
        <div className="formPage">
          <div className="formPage__form">
            <Form formFunction="registration" isRegistration={true}/>
          </div>
        </div>
      </div>
    </div>
  );
};