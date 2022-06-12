/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */

import React, { forwardRef, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DatePicker from 'react-datepicker';
import ru from 'date-fns/locale/ru';
import 'react-datepicker/dist/react-datepicker.css';
import { filterChange } from '../../../slices/filterSlice';

export default function DateFilter() {
   const dispatch = useDispatch();
   const dateStart = useSelector((state) => state.search.dateStart);
   const dateEnd = useSelector((state) => state.search.dateEnd);
   const start = useSelector((state) => state.filter.date_start_arrival);
   const end = useSelector((state) => state.filter.date_end_arrival);
   const [startArrival, setStart] = useState();
   const [endArrival, setEnd] = useState();

   useEffect(() => {
      dispatch(
         filterChange({
            name: 'date_start',
            value: dateStart,
         })
      );
      dispatch(
         filterChange({
            name: 'date_end',
            value: dateEnd,
         })
      );
   }, []);

   useEffect(() => {
      if (start) {
         setStart(new Date(start));
      }
   }, [start]);

   useEffect(() => {
      if (end) {
         setEnd(new Date(end));
      }
   }, [end]);

   const handleChange = (name, date) => {
      const str = date.toLocaleDateString();
      const format = `${str.slice(-4)}-${str.slice(3, 5)}-${str.slice(0, 2)}`;
      dispatch(
         filterChange({
            name,
            value: format,
         })
      );
   };

   const Input = forwardRef(({ value, onClick }, ref) => (
      <input
         className="dateFilter_field dateFilter_field--date"
         type="text"
         placeholder="ДД/ММ/ГГ"
         value={value}
         onClick={onClick}
         onChange={onClick}
         ref={ref}
      />
   ));

   return (
      <div className="dateFilter_fieldset">
         <div className="dateFilter_controls">
            <div className="dateFilter_control">
               <label className="dateFilter_title">
                  Дата поездки
                  <DatePicker
                     id="dateStart"
                     locale={ru}
                     dateFormat="dd.MM.yyyy"
                     selected={startArrival}
                     selectsStart
                     startDate={startArrival}
                     endDate={endArrival}
                     minDate={new Date(dateStart)}
                     maxDate={new Date(dateEnd)}
                     customInput={<Input />}
                     onChange={(date) =>
                        handleChange('date_start_arrival', date)
                     }
                  />
               </label>
            </div>
            <div className="dateFilter_control">
               <label className="dateFilter_title">
                  Дата возвращения
                  <DatePicker
                     id="dateEnd"
                     locale={ru}
                     dateFormat="dd.MM.yyyy"
                     selected={endArrival}
                     selectsEnd
                     startDate={startArrival}
                     endDate={endArrival}
                     minDate={new Date(dateStart)}
                     maxDate={new Date(dateEnd)}
                     customInput={<Input />}
                     onChange={(date) => handleChange('date_end_arrival', date)}
                  />
               </label>
            </div>
         </div>
      </div>
   );
}
