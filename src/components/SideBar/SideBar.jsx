import React from 'react';
import { useSelector } from 'react-redux';

import Parametres from './Parameters/Parametres';
import Last from './Last/Last';
import Details from './Details';

export default function SideBar() {
   const { stage } = useSelector((state) => state.stage);
   return (
      <div className="sideBar">
         {stage === 1 ? (
            <div className="sideBar-wrapper">
               <Parametres />
               <Last />
            </div>
         ) : (
            <div className="sideBar-wrapper">
               <Details />
            </div>
         )}
      </div>
   );
}
