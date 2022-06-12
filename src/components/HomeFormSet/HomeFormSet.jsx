import React from 'react';
import SearchForm from '../Forms/SearchForm/SearchForm';
import './HomeFormSet.css';

export default function HomeFormSet() {
   return (
      <section className="home-form-set">
         <div className="content_wrapper home-form-wrapper">
            <div className="title_wrapper">
               <h1 className="home-form-set_title">
                  <span className="home-form-set_subtitle">
                     Вся жизнь -
                     <br />
                  </span>
                  путешествие!
               </h1>
            </div>
            <SearchForm formView="homeForm" />
         </div>
      </section>
   );
}
