import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './HomePage/HomePage';
import OrderPage from './OrderPage/OrderPage';

function App() {
   return (
      <Router>
         <Header />
         <main className="main_container">
            <Routes>
               <Route path="/fe-diploma" element={<HomePage />} />
               <Route path="/" element={<HomePage />} />
               <Route path="/order/*" element={<OrderPage />} />
            </Routes>
         </main>
         <Footer />
      </Router>
   );
}

export default App;
