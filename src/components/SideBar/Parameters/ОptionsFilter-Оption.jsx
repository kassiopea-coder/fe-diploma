/* eslint-disable jsx-a11y/label-has-associated-control */

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { filterChange } from '../../../slices/filterSlice';

export default function Option({ name, alt, src }) {
   const { filter } = useSelector((state) => state);

   const dispatch = useDispatch();

   const handleChange = (event) => {
      const { target } = event;
      dispatch(filterChange({ name: target.name, value: target.checked }));
   };

   return (
      <li className="optionsFilter-item">
         <div className="optionsFilter-icon">
            <img className="optionsFilter-image" src={src} alt={alt} />
         </div>
         <p className="optionsFilter-title">{alt}</p>
         <div className="optionsFilter-form">
            <input
               className="optionsFilter-checkbox"
               type="checkbox"
               name={name}
               id={name}
               checked={filter[name]}
               onChange={handleChange}
            />
            <label
               className={`optionsFilter-switch-label ${
                  filter[name] && 'isOn'
               }`}
               htmlFor={name}
            >
               <span className="optionsFilter-switch-button" />
            </label>
         </div>
      </li>
   );
}
Option.propTypes = {
   name: PropTypes.string.isRequired,
   alt: PropTypes.string.isRequired,
   src: PropTypes.string.isRequired,
};
