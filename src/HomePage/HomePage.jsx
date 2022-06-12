import React from 'react';
import About from '../components/About/About';
import HomeFormSet from '../components/HomeFormSet/HomeFormSet';
import HowItWork from '../components/HowItWork/HowItWork';
import Reviews from '../components/Reviews/Reviews';

export default function HomePage() {
   return (
      <div className="homepage">
         <HomeFormSet />
         <About />
         <HowItWork />
         <Reviews />
      </div>
   );
}
