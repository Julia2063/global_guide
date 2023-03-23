import React, { useContext } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { Form } from '../components/Form';
import { UserContext } from '../components/UserProvider';

export const AccountPage = () => {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = (e, regInfo) => {
    e.preventDefault();
    const auth = getAuth();

    signInWithEmailAndPassword(auth, regInfo.email,regInfo.password)
      .then((userCredential) => {
        const user = userCredential.user;

        setUser(user);
        navigate('/home');
      })
      .catch((err) => alert(`${err}`));
  };

  return (
    <div className="page page-bigBottom">
      <div className="container">
        <div className="formPage">
          <div className="formPage__form">
            <Form 
              formFunction="account"
              handleSubmit={handleLogin}
            />
          </div>
        </div>
      </div>
    </div>
  );
};