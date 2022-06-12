import React from 'react';
import SearchForm from '../Forms/SearchForm/SearchForm';
import './OrderFormSet.css';

export default function OrderFormSet() {
   return (
      <section className="order-form-set">
         <div className="content_wrapper order-form-wrapper">
            <SearchForm formView="orderForm" />
         </div>
      </section>
   );
}
