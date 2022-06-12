import React from 'react';
import { nanoid } from 'nanoid';
import Options from './ОptionsFilter-Оption';

import firstClass from '../../../img/sideBar/firstClass.svg';
import secondClass from '../../../img/sideBar/secondClass.svg';
import thirdClass from '../../../img/sideBar/thirdClass.svg';
import fourthClass from '../../../img/sideBar/fourthClass.svg';
import wifi from '../../../img/sideBar/wifi.svg';
import express from '../../../img/sideBar/express.svg';

function OptionsFilter() {
   return (
      <div className="optionsFilter">
         <ul className="optionsFilter-list">
            <Options
               key={nanoid()}
               name="have_second_class"
               alt="Купе"
               src={secondClass}
            />
            <Options
               key={nanoid()}
               name="have_third_class"
               alt="Плацкарт"
               src={thirdClass}
            />
            <Options
               key={nanoid()}
               name="have_fourth_class"
               alt="Сидячий"
               src={fourthClass}
            />
            <Options
               key={nanoid()}
               name="have_first_class"
               alt="Люкс"
               src={firstClass}
            />
            <Options key={nanoid()} name="have_wifi" alt="Wi-Fi" src={wifi} />
            <Options
               key={nanoid()}
               name="have_express"
               alt="Экспресс"
               src={express}
            />
         </ul>
      </div>
   );
}

export default OptionsFilter;
