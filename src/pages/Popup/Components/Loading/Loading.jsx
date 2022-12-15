import React from 'react';
import loadingIcon from '../../../../assets/img/loading.png';
import './Loading.scss';

function Loading() {
  return (
    <div className="loading">
      <img className="loading__spinner" src={loadingIcon} alt="loading..." />
      <p>Looking for Promo Codes</p>
    </div>
  );
}

export default Loading;
