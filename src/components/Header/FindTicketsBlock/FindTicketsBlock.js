import "./findTicketsBlock.scss";
import React, { memo } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import DestinationPicker from "../../Pickers/DestinationPicker/DestinationPicker";
import CustomDatePicker from "../../Pickers/DatePicker/CustomDatePicker";
import { fetchRoutes } from "../../../store/fetchRoutes";

const FindTicketsBlock = memo(() => {
  const history = useHistory();
  const dispatch = useDispatch();
  const params = useSelector((state) => state.params);

  const findTickets = () => {
    if (params.cityDeparture.value && params.cityArrival.value) {
      dispatch(fetchRoutes(params));
      history.push("/selection");
    }
  };

  return (
    <div className="block__container">
      <div className="destination">
        <DestinationPicker />
      </div>
      <div className="date">
        <CustomDatePicker pickerPlace="headerPicker" />
      </div>
      <div className="click">
        <button onClick={findTickets}>Найти билеты</button>
      </div>
    </div>
  );
});

export default FindTicketsBlock;
