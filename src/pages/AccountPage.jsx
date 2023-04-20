import React, { useState, useContext } from 'react';
import { 
  getAuth, 
  sendPasswordResetEmail, 
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { Form } from '../components/Form';
import { AppContext } from '../components/AppProvider';
import { Modal } from '../components/Modal';

export const AccountPage = () => {
  const [isModal, setIsModal] = useState(false);
  const [errorTitle, setErrorTitle] = useState('Login Error');
  const [errorMessage, setErrorMessage] = useState('');



  const { setUser } = useContext(AppContext);
  const navigate = useNavigate();

  const auth = getAuth();

  const handleLogin = (e, regInfo) => {
    e.preventDefault();
    const auth = getAuth();

    signInWithEmailAndPassword(auth, regInfo.email,regInfo.password)
      .then((userCredential) => {
        const user = userCredential.user;

        setUser(user);
        navigate('/home');
      })
      .catch((error) => {
        setIsModal(true);
        setErrorMessage(error.message);
      });
  };

  const handleModal = () => {
    setIsModal(!isModal);
  };

  const handleResetPassword = (regInfo) => {
    if (regInfo.email.length === 0) {
      setIsModal(true);
      setErrorTitle('Reset password error');
      setErrorMessage('Enter your email please!');
      return;
    } else {
      sendPasswordResetEmail(auth, regInfo.email)
        .then(() => {
          setIsModal(true);
          setErrorTitle('Notification');
          setErrorMessage(
            // eslint-disable-next-line max-len
            'Password reset email sent! Please check it, confirm reset and re-login! Don\'t forget check "Spam" folder!'
          );
        })
        .catch(() => {
          setIsModal(true);
          setErrorTitle('Error');
          setErrorMessage('Something went wrong with reset password sending');
        });
    }
   
  };

  return (
    <>
      <div className="page page-bigBottom">
        <div className="container">
          <div className="formPage">
            <div className="formPage__form">
              <Form 
                formFunction="account"
                handleSubmit={handleLogin}
                handleResetPassword={handleResetPassword}
              />
            </div>
          </div>
        </div>
      </div>

      {isModal && (
        <Modal 
          title="Login Error" 
          message={errorMessage}
          handleModal={handleModal} 
        />
      )}
    </>  
  );
};