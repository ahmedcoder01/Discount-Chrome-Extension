import React from 'react';
import Promo from './Promo/Promo';
import './Promos.scss';

function Promos({ promos }) {
  console.log(promos);
  return (
    <ul className="promos">
      {React.Children.toArray(promos.map((promo) => <Promo data={promo} />))}
    </ul>
  );
}

export default Promos;
