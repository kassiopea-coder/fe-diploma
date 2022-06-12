/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { cityExchange } from '../../../slices/searchSlice';

import RouteInput from './RouteInput';

export default function Routes({ formView }) {
   const dispatch = useDispatch();

   const handleClick = () => {
      dispatch(cityExchange());
   };

   return (
      <div className="search-form_fieldset">
         <div from="cities" className={`search-form_title ${formView}-title`}>
            Направление
            <div className="search-form_controls">
               <RouteInput placeholder="Откуда" direction="routeFrom" />
               <button
                  type="button"
                  className="search-form_swap"
                  onClick={handleClick}
               />
               <RouteInput placeholder="Куда" direction="routeIn" />
            </div>
         </div>
      </div>
   );
}

Routes.propTypes = {
   formView: PropTypes.string.isRequired,
};
