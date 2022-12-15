import React from 'react';
import Message from '../../../Components/Message/Message';
import './Promo.scss';

function Promo({ data }) {
  function copyCodeHandler() {
    navigator.clipboard.writeText(data.code);
  }

  return (
    <div className="promo">
      <div className="promo__wrapper">
        <img className="promo__image" src={data.img} alt="promo logo" />
        <Message className="promo_text">{data.text}</Message>
      </div>

      <div className="promo__wrapper">
        <button className="promo__copy__btn" onClick={copyCodeHandler}>
          Click to copy code
        </button>
        <span className="promo__code">{data.code}</span>
      </div>
    </div>
  );
}

export default Promo;
