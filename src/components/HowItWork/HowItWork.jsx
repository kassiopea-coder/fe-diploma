import React from 'react';
import './HowItWork.css';
import imgFirst from '../../img/howItWork/howItWork-1.svg';
import imgSecond from '../../img/howItWork/howItWork-2.svg';
import imgThird from '../../img/howItWork/howItWork-3.svg';

export default function HowItWork() {
   return (
      <section className="howItWork" id="faq">
         <div className="content_wrapper">
            <div className="howItWork_title-wrapper">
               <h2 className="howItWork_title">Как это работает</h2>
               <button className="howItWork_button" type="button">
                  Узнать больше
               </button>
            </div>

            <div className="howItWork_info">
               <div className="info-card">
                  <img src={imgFirst} alt="удобный заказ на сайте" />
                  <p className="info-card-text">
                     Удобный заказ
                     <br />
                     на сайте
                  </p>
               </div>

               <div className="info-card">
                  <img src={imgSecond} alt="Нет необходимости ехать в офис" />
                  <p className="info-card-text">
                     Нет необходимости
                     <br />
                     ехать в офис
                  </p>
               </div>

               <div className="info-card">
                  <img src={imgThird} alt="Огромный выбор направлений" />
                  <p className="info-card-text">
                     Огромный выбор
                     <br />
                     направлений
                  </p>
               </div>
            </div>
         </div>
      </section>
   );
}
