/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-underscore-dangle */

import React, { useEffect, useState } from 'react';
import LastTicket from './LastTicket';
import './Last.css';

export default function Last() {
   const [items, setItems] = useState([]);

   useEffect(() => {
      fetch('https://fe-diplom.herokuapp.com/routes/last')
         .then((response) => response.json())
         .then((data) => setItems(data))
         .catch((err) => console.log(err));
   }, []);

   const onClick = () => {
      console.log('onClick: what should happen??');
   };

   if (items.length === 0) return '';
   return (
      <section className="last" onClick={onClick}>
         <h3 className="last_tittle">Последние билеты</h3>
         <div className="last_list">
            {items.map((item) => (
               <LastTicket ticket={item} key={item.departure._id} />
            ))}
         </div>
      </section>
   );
}
