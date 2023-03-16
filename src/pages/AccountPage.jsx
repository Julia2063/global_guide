import React from 'react';
import { Form } from '../components/Form';

export const AccountPage = () => {
  return (
    <div className="page page-bigBottom">
      <div className="container">
        <div className="formPage">
          <div className="formPage__form">
            <Form formFunction="account" />
          </div>
        </div>
      </div>
    </div>
  );
};