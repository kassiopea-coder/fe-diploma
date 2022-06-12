/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/control-has-associated-label */

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import { filterChange } from '../../../slices/filterSlice';

export default function TimeFilter() {
   const {
      start_departure_hour_from,
      start_departure_hour_to,
      start_arrival_hour_from,
      start_arrival_hour_to,
      end_departure_hour_from,
      end_departure_hour_to,
      end_arrival_hour_from,
      end_arrival_hour_to,
      dateEnd,
   } = useSelector((state) => state.filter);
   const dispatch = useDispatch();

   const [isHidden, setHidden] = useState({
      departure: true,
      arrival: true,
   });
   const onHidden = (name) => {
      setHidden((prev) => ({ ...prev, [name]: !prev[name] }));
   };

   const handleChange = (name, value) => {
      dispatch(filterChange({ name: `${name}_hour_from`, value: value.min }));
      dispatch(filterChange({ name: `${name}_hour_to`, value: value.max }));
   };

   return (
      <>
         <div className="timeFilter">
            <div className="timeFilter_header">
               <h4 className="timeFilter_header-title title title-goThere">
                  Туда
               </h4>
               <button
                  type="button"
                  className={`timeFilter_button ${
                     isHidden.departure ? 'active-button' : 'inactive-button'
                  }`}
                  onClick={() => onHidden('departure')}
               />
            </div>
            <div
               className={`timeFilter_form ${
                  isHidden.departure ? 'hidden' : ''
               }`}
            >
               <p className="timeFilter_title">Время отбытия</p>
               <div className="timeFilter_range">
                  <InputRange
                     formatLabel={(value) => `${value}:00`}
                     minValue={0}
                     maxValue={24}
                     value={{
                        min: start_departure_hour_from,
                        max: start_departure_hour_to,
                     }}
                     onChange={(value) =>
                        handleChange('start_departure', value)
                     }
                  />
               </div>
               <p className="timeFilter_title title title-right">
                  Время прибытия
               </p>
               <div className="timeFilter_range">
                  <InputRange
                     formatLabel={(value) => `${value}:00`}
                     minValue={0}
                     maxValue={24}
                     value={{
                        min: start_arrival_hour_from,
                        max: start_arrival_hour_to,
                     }}
                     onChange={(value) => handleChange('start_arrival', value)}
                  />
               </div>
            </div>
         </div>
         <div className="timeFilter">
            <div className={`timeFilter_inner ${dateEnd ? '' : 'hiddenn'}`}>
               <div className="timeFilter_header">
                  <h4 className="timeFilter_header-title title title-goBack">
                     Обратно
                  </h4>
                  <button
                     type="button"
                     className={`timeFilter_button ${
                        isHidden.arrival ? 'active-button' : 'inactive-button'
                     }`}
                     onClick={() => onHidden('arrival')}
                  />
               </div>
               <div
                  className={`timeFilter_form ${
                     isHidden.arrival ? 'hidden' : ''
                  }`}
               >
                  <p className="timeFilter_title title">Время отбытия</p>
                  <div className="timeFilter_range">
                     <InputRange
                        formatLabel={(value) => `${value}:00`}
                        minValue={0}
                        maxValue={24}
                        value={{
                           min: end_departure_hour_from,
                           max: end_departure_hour_to,
                        }}
                        onChange={(value) =>
                           handleChange('end_departure', value)
                        }
                     />
                  </div>
                  <p className="timeFilter_title title-right">Время прибытия</p>
                  <div className="timeFilter_range">
                     <InputRange
                        formatLabel={(value) => `${value}:00`}
                        minValue={0}
                        maxValue={24}
                        value={{
                           min: end_arrival_hour_from,
                           max: end_arrival_hour_to,
                        }}
                        onChange={(value) => handleChange('end_arrival', value)}
                     />
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}
