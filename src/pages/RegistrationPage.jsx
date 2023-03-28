import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { Form } from '../components/Form';
import { Modal } from '../components/Modal';

export const RegistrationPage = () => {
  const [isModal, setIsModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

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
        setIsModal(true);
        setErrorMessage(error.message);
      });;
  }; 

  const handleModal = () => {
    setIsModal(!isModal);
  };

  return (
    <>
      <div className="page page-bigBottom">
        <div className="container">
          <div className="formPage">
            <div className="formPage__form">
              <Form
                formFunction="registration"
                isRegistration={true}
                handleSubmit={handleRegister} />
            </div>
          </div>
        </div>
      </div>
      
      {isModal && (
        <Modal 
          title="Registration Error" 
          message={errorMessage}
          handleModal={handleModal} 
        />
      )}
    </>
  );
};