import React from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { Form } from '../components/Form';

export const RegistrationPage = () => {
  const navigate = useNavigate();

  const handleRegister = (e, regInfo) => {
    e.preventDefault();
    const auth = getAuth();
    
    createUserWithEmailAndPassword(auth, regInfo.email, regInfo.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate('/account');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });;
  }; 

  return (
    <div className="page page-bigBottom">
      <div className="container">
        <div className="formPage">
          <div className="formPage__form">
            <Form 
              formFunction="registration" 
              isRegistration={true}
              handleSubmit={handleRegister}
            />
          </div>
        </div>
      </div>
    </div>
  );
};