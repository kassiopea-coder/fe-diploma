import React from 'react';
import DateFilter from './DateFilter';
import OptionsFilter from './OptionsFilter';
import PriceFilter from './PriceFilter';
import TimeFilter from './TimeFilter';

import './Parametres.css';

export default function Parametres() {
   return (
      <aside className="parameters">
         <DateFilter />
         <OptionsFilter />
         <PriceFilter />
         <TimeFilter />
      </aside>
   );
}
