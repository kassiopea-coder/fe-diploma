import React from 'react';
import './About.css';

export default function About() {
   return (
      <section className="homepage_about" id="about">
         <div className="content_wrapper text-wrapper">
            <h2 className="homepage_about-title">о нас</h2>
            <div className="homepage_about-text">
               <p>
                  Мы рады видеть вас! Мы рботаем для Вас с 2003 года. 14 лет мы
                  наблюдаем, как с каждым днем
                  <br />
                  все больше людей заказывают жд билеты через интернет.
               </p>
               <p>
                  Сегодня можно заказать железнодорожные билеты онлайн всего в 2
                  клика, но стоит ли это делать?
                  <br />
                  Мы расскажем о преимуществах заказа через интернет.
               </p>
               <p className="bold">
                  Покупать жд билеты дешево можно за 90 суток до отправления
                  поезда.
                  <br />
                  Благодаря динамическому ценообразованию цена на билеты в это
                  время самая низкая.
               </p>
            </div>
         </div>
      </section>
   );
}
