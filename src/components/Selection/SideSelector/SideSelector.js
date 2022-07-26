import { useDispatch, useSelector } from "react-redux";
import React, { memo, useMemo } from "react";

import "./sideSelector.css";
import coupe from "./FilterSeats/img/coupe.svg";
import platz from "./FilterSeats/img/platz.svg";
import seat from "./FilterSeats/img/seat.svg";
import lux from "./FilterSeats/img/lux.svg";
import wifi from "./FilterSeats/img/wifi.svg";
import express from "./FilterSeats/img/express.svg";
import forward from "./FilterTime/img/forward.svg";
import back from "./FilterTime/img/back.svg";

import CustomDatePicker from "../../Pickers/DatePicker/CustomDatePicker";
import FilterSeats from "./FilterSeats/FilterSeats";
import FilterPrice from "./FilterPrice/FilterPrice";
import FilterTime from "./FilterTime/FilterTime";

import { searchParamsFiltersSet } from "../../../store/params";
import { fetchRoutes } from "../../../store/fetchRoutes";

const SideSelector = memo(() => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.params.filters);
  const params = useSelector((state) => state.params);

  const changeFilter = (filter, state) => {
    dispatch(searchParamsFiltersSet({ [filter]: state }));
    dispatch(fetchRoutes(params));
  };

  const stubRange = { min: 0, max: 10000 };

  const priceRange = useMemo(() => {
    if (filters.price_from && filters.price_to) {
      return {
        minPrice: filters.price_from,
        maxPrice: filters.price_to,
      };
    } else {
      return {
        minPrice: stubRange.min,
        maxPrice: stubRange.max,
      };
    }
  }, [filters.price_from, filters.price_to, stubRange.min, stubRange.max]);

  return (
    <div className="sideSelector__container">
      <CustomDatePicker pickerPlace="sidePicker" />
      <div className="selector__seatsFilter">
        <ul className="seatsFilter__list">
          <FilterSeats
            icon={coupe}
            text="Купе"
            onChange={changeFilter}
            filter="have_second_class"
            checked={filters.have_second_class}
          />
          <FilterSeats
            icon={platz}
            text="Плацкарт"
            onChange={changeFilter}
            filter="have_third_class"
            checked={filters.have_third_class}
          />
          <FilterSeats
            icon={seat}
            text="Сидячий"
            onChange={changeFilter}
            filter="have_fourth_class"
            checked={filters.have_fourth_class}
          />
          <FilterSeats
            icon={lux}
            text="Люкс"
            onChange={changeFilter}
            filter="have_first_class"
            checked={filters.have_first_class}
          />
          <FilterSeats
            icon={wifi}
            text="Wi-Fi"
            onChange={changeFilter}
            filter="have_wifi"
            checked={filters.have_wifi}
          />
          <FilterSeats
            icon={express}
            text="Экспресс"
            onChange={changeFilter}
            filter="is_express"
            checked={filters.is_express}
          />
        </ul>
      </div>
      <div className="selector__price">
        <FilterPrice
          initialRange={[
            priceRange.minPrice || stubRange.min,
            priceRange.maxPrice || stubRange.max,
          ]}
          stubRange={stubRange}
        />
      </div>
      <div className="selector__timeTo">
        <FilterTime icon={forward} type="outbound" />
      </div>
      <div className="selector__timeBack">
        <FilterTime icon={back} type="return" />
      </div>
    </div>
  );
});

export default SideSelector;
