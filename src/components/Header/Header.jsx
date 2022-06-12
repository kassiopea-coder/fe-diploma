import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

import './Header.css';

export default function Header() {
   return (
      <header className="heder" id="start">
         <div className="logo_wrapper">
            <div className="logo content_wrapper">
               <Link to="/" className="navbar-brand logo">
                  <p className="logo">Лого</p>
               </Link>
            </div>
         </div>
         <Navigation />
      </header>
   );
}
