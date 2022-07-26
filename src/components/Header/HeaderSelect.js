import "./header.scss";
import React, { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "./NavBar/NavBar";
import Logo from "./Logo/Logo";
import DestinationPicker from "../Pickers/DestinationPicker/DestinationPicker";
import CustomDatePicker from "../Pickers/DatePicker/CustomDatePicker";
import { fetchRoutes } from "../../store/fetchRoutes";

const HeaderSelect = memo(() => {
  const dispatch = useDispatch();
  const params = useSelector((state) => state.params);

  const findTickets = () => {
    if (params.cityDeparture.value && params.cityArrival.value) {
      dispatch(fetchRoutes(params));
    }
  };

  return (
    <div className="wrapper__select">
      <header className="header">
        <div className="top">
          <Logo />
          <NavBar />
        </div>
        <div className="headerSelect__content">
          <div className="pickersBlock">
            <div className="pickers">
              <DestinationPicker />
              <CustomDatePicker pickerPlace="headerPicker" />
            </div>
            <div className="headerSelect__button">
              <button onClick={findTickets}>Найти билеты</button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
});

export default HeaderSelect;
