import React from 'react';
import { HashLink } from 'react-router-hash-link';

export default function Navigation() {
   return (
      <div className="menu_wrapper">
         <nav className="content_wrapper nav-wrapper">
            <ul className="navbar-nav">
               <li className="nav-item">
                  <HashLink
                     to="/#about"
                     smooth
                     duration={1000}
                     className="nav-link"
                  >
                     О нас
                  </HashLink>
               </li>

               <li className="nav-item">
                  <HashLink
                     to="/#faq"
                     smooth
                     duration={1000}
                     className="nav-link"
                  >
                     Как это работает
                  </HashLink>
               </li>

               <li className="nav-item">
                  <HashLink
                     to="/#reviews"
                     smooth
                     duration={1000}
                     className="nav-link"
                  >
                     Отзывы
                  </HashLink>
               </li>

               <li className="nav-item">
                  <HashLink
                     to="/#contacts"
                     smooth
                     duration={1000}
                     className="nav-link"
                  >
                     Контакты
                  </HashLink>
               </li>
            </ul>
         </nav>
      </div>
   );
}
