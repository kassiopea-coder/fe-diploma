/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import { useDispatch, useSelector } from 'react-redux';
import { filterChange } from '../../../slices/filterSlice';

export default function PriceFilter() {
   const dispatch = useDispatch();
   const { price_from, price_to } = useSelector((state) => state.filter);

   const onChange = (value) => {
      dispatch(filterChange({ name: 'price_from', value: value.min }));
      dispatch(filterChange({ name: 'price_to', value: value.max }));
   };

   return (
      <div className="priceFilter">
         <h4 className="priceFilter_title" htmlFor="slider">
            Стоимость
         </h4>
         <div className="priceFilter_label-wrapper">
            <p className="priceFilter_label">от</p>
            <p className="priceFilter_label">до</p>
         </div>
         <InputRange
            id="slider"
            minValue={10}
            maxValue={9000}
            step={10}
            onChange={onChange}
            value={{
               min: price_from,
               max: price_to,
            }}
         />
      </div>
   );
}
