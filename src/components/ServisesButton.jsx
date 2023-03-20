import React from 'react';
import PropTypes from 'prop-types';

export const ServisesButton = ({ img, title, onClick }) => {
  return (
    <label className="servisesButton__label">
      <button className="servisesButton__body" onClick={onClick}>
        <div className="servisesButton__icon">
          <img src={img} alt="icon" className="servisesButton__img" />
        </div>
        {title}
      </button>
    </label>
  );
};

ServisesButton.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};