/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Footer.css';
import { HashLink } from 'react-router-hash-link';

import {
   phone,
   email,
   skype,
   geo,
   youtube,
   linkedin,
   google,
   facebook,
   twitter,
   scrollToTop,
} from './footer-icons';

export default function Footer() {
   return (
      <footer className="footer" id="contacts">
         <div className="footer_content content_wrapper">
            <div className="footer_contacts-wrapper">
               <section className="footer_contacts">
                  <h3 className="footer_contacts-title footer-title">
                     Свяжитесь с нами
                  </h3>
                  <ul className="footer_contacts-list">
                     <li className="footer_contacts-item">
                        {phone}
                        <p className="footer_contacts-text">
                           8 (800) 000 00 00
                        </p>
                     </li>
                     <li className="footer_contacts-item">
                        {email}
                        <p className="footer_contacts-text">inbox@mail.ru</p>
                     </li>
                     <li className="footer_contacts-item">
                        {skype}
                        <p className="footer_contacts-text">tu.train.tickets</p>
                     </li>
                     <li className="footer_contacts-item">
                        {geo}
                        <p className="footer_contacts-text">
                           г. Москва
                           <br />
                           ул. Московская 27-35
                           <br />
                           555 555
                        </p>
                     </li>
                  </ul>
               </section>
               <section className="footer_subscribe">
                  <h3 className="footer_subscribe-title footer-title">
                     Подписка
                  </h3>
                  <form
                     className="footer_form"
                     onSubmit={(e) => {
                        e.preventDefault();
                     }}
                  >
                     <label
                        className="footer_form-label"
                        htmlFor="subscription"
                     >
                        Будьте в курсе событий
                        <div className="input-wrapper">
                           <input
                              className="footer_form-input"
                              type="email"
                              id="subscription"
                              placeholder="e-mail"
                           />
                           <button
                              className="footer_form-button"
                              id="button"
                              type="button"
                           >
                              Отправить
                           </button>
                        </div>
                     </label>
                  </form>
                  <h3 className="footer_subscribe-title footer-title second-title ">
                     Подписывайтесь на нас
                  </h3>
                  <div className="footer_subscribe-icons">
                     <a href="#" className="footer_subscribe-link">
                        {youtube}
                     </a>
                     <a href="#" className="footer_subscribe-link">
                        {linkedin}
                     </a>
                     <a href="#" className="footer_subscribe-link">
                        {google}
                     </a>
                     <a href="#" className="footer_subscribe-link">
                        {facebook}
                     </a>
                     <a href="#" className="footer_subscribe-link">
                        {twitter}
                     </a>
                  </div>
               </section>
            </div>
         </div>
         <div className="footer_logo-wrapper">
            <div className="content_wrapper content_logo-wrapper">
               <HashLink
                  to="/#start"
                  smooth
                  duration={1000}
                  className="footer_logo logo"
               >
                  <p className="logo">Лого</p>
               </HashLink>
               <HashLink to="/#start" smooth duration={1000} className="up">
                  {scrollToTop}
               </HashLink>
               <span className="footer_copyright">2018 WEB</span>
            </div>
         </div>
      </footer>
   );
}
