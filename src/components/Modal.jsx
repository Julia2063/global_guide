import React from 'react';
import PropTypes from 'prop-types';

import cross from '../assets/icons/cross__white.svg';

export const Modal = ({ title, message, handleModal }) => {
    
  return (
    <>
      <div className="modal">
        <div className="modal__window">
          <div className="modal__title">
            <div className="modal__between" />
            <p>{title}</p>
            <button className="modal__close" onClick={handleModal}>
              <img 
                src={cross} 
                alt="cross" 
                className="modal__icon"
              />
            </button>
          </div>
          <div className="modal__body">
            {message}
          </div>
        </div>
      </div>
      <div className="modal__shadow" />
    </>
  );
};

Modal.propType = {
  title: PropTypes.string.isRequired, 
  message: PropTypes.string.isRequired, 
  handleModal: PropTypes.func.isRequired,
};