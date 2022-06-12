/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import './Reviews.css';
import man from '../../img/reviews/man.png';
import woman from '../../img/reviews/woman.png';

export default function Reviews() {
   return (
      <section className="Reviews" id="reviews">
         <div className="content_wrapper">
            <h2 className="Reviews_title">отзывы</h2>

            <div className="reviews_cards">
               <div className="reviews_card">
                  <div className="reviews_card-icon">
                     <img
                        className="reviews_card-image"
                        src={woman}
                        alt="Екатерина Вальнова"
                     />
                  </div>
                  <div className="reviews_card-inner">
                     <p className="reviews_card-title">Екатерина Вальнова</p>
                     <p className="reviews_card-content">
                        Доброжелательные подсказки
                        <br />
                        на всех этапах помогут правильно заполнить
                        <br />
                        поля и без затруднений купить авиа или ж/д
                        <br />
                        билет, даже если вы заказываете онлайн билет
                        <br />
                        впервые.
                     </p>
                  </div>
               </div>
               <div className="reviews_card">
                  <div className="reviews_card-icon">
                     <img
                        className="reviews_card-image"
                        src={man}
                        alt="Евгений Стрыкало"
                     />
                  </div>
                  <div className="reviews_card-inner">
                     <p className="reviews_card-title">Евгений Стрыкало</p>
                     <p className="reviews_card-content">
                        СМС-сопровождение до посадки
                        <br />
                        Сразу после оплаты ж/д билетов
                        <br />
                        и за 3 часа до отправления мы пришлем вам
                        <br />
                        СМС-напоминание о поездке.
                     </p>
                  </div>
               </div>
            </div>
            <div className="reviews_slider">
               <div className="reviews_slider-button reviews_slider-button-active" />
               <div className="reviews_slider-button" />
               <div className="reviews_slider-button" />
               <div className="reviews_slider-button" />
               <div className="reviews_slider-button" />
            </div>
         </div>
      </section>
   );
}
