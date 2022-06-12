/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { filterChange } from '../../slices/filterSlice';
import Train from './Train/Train';
import Pagination from './Pagination/Pagination';

import './TrainList.css';
import { fetchRoutes } from '../../slices/routesSlice';

export default function TrainList() {
   const dispatch = useDispatch();
   const count = useSelector((state) => state.routes.total_count);
   const trains = useSelector((state) => state.routes.routes);
   const filter = useSelector((state) => state.filter);
   const { sort, limit } = filter;

   const limits = [5, 10, 20];

   useEffect(() => {
      dispatch(fetchRoutes());
   }, [filter]);

   const handleChange = (name, value) => {
      dispatch(filterChange({ name, value }));
   };

   return (
      <section className="trainList order_options">
         <div className="trainList_header">
            <div className="trains_totalCount">найдено {count}</div>

            <div className="trainList_sort">
               <h5 className="trainList_sort-title">сортировать по:</h5>
               <select
                  className="trainList_sort-list"
                  name="sort"
                  value={sort}
                  onChange={(e) => handleChange(e.target.name, e.target.value)}
               >
                  <option className="trainList_sort-item" value="time">
                     времени
                  </option>
                  <option className="trainList_sort-item" value="price_min">
                     стоимости
                  </option>
                  <option className="trainList_sort-item" value="duration">
                     длительности
                  </option>
               </select>
            </div>

            <div className="trainList_view">
               <h5 className="trainList-title">показывать по:</h5>
               <ul className="trainList_view-list">
                  {limits.map((el) => (
                     <li
                        className={`trainList_view-item ${
                           limit === el ? 'trainList_view-item--active' : ''
                        }`}
                        key={el}
                        onClick={() => handleChange('limit', el)}
                     >
                        {el}
                     </li>
                  ))}
               </ul>
            </div>
         </div>

         <div className="trainList_train-list">
            {trains.map((el) => (
               <Train key={nanoid()} train={el} />
            ))}
         </div>

         <Pagination />
      </section>
   );
}
