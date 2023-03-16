import React from 'react';

export const ServisesButton = ({ img, title }) => {
  return (
    <label className="servisesButton__label">
      <button className="servisesButton__body">
        <div className="servisesButton__icon">
          <img src={img} alt="icon" className="servisesButton__img" />
        </div>
        {title}
      </button>
    </label>
  );
};