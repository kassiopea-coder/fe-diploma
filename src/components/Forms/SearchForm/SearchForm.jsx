import React from 'react';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import 'react-datepicker/dist/react-datepicker.css';
import './SearchForm.css';

import Routes from './SearchForm-Routes';
import DatePickers from './SearchForm-DatePickers';
import { fetchRoutes } from '../../../slices/routesSlice';

export default function SearchForm({ formView }) {
   const novigate = useNavigate();
   const dispatch = useDispatch();
   const onSubmit = (e) => {
      e.preventDefault();
      dispatch(fetchRoutes());

      novigate('/order/tickets/train');
   };

   return (
      <form className={`search-form ${formView}`}>
         <div className={`search-form_wrapper ${formView}-wrapper`}>
            <div className={`${formView}-fields`}>
               <Routes formView={formView} />
               <DatePickers formView={formView} />
            </div>

            <div className={`search-form_buttons ${formView}-buttons`}>
               <button
                  type="submit"
                  className="button search-form_button"
                  onClick={onSubmit}
               >
                  Найти билеты
               </button>
            </div>
         </div>
      </form>
   );
}

SearchForm.propTypes = {
   formView: PropTypes.string.isRequired,
};
