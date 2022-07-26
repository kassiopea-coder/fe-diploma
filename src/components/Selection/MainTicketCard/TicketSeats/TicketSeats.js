import "./ticketSeats.css";
import { memo } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { appStateSetTrainOutbound } from "../../../../store/appState";

import TicketSeatsRow from "./TicketSeatsRow";
import TicketServices from "../TicketServices/TicketServices";

const carriageTypes = {
  class1: "Люкс",
  class2: "Купе",
  class3: "Плацкарт",
  class4: "Сидячий",
};

const TicketSeats = memo(({ train }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const {
    departure: {
      have_wifi,
      have_air_conditioning,
      is_express,
      have_fourth_class: class4,
      have_third_class: class3,
      have_second_class: class2,
      have_first_class: class1,
      available_seats_info: {
        fourth: count4,
        third: count3,
        second: count2,
        first: count1,
      },
      price_info: {
        fourth: price4,
        third: price3,
        second: price2,
        first: price1,
      },
    },
  } = train;

  const selectTrain = (data) => {
    dispatch(appStateSetTrainOutbound(data));
    history.push("/seats");
  };

  return (
    <div className="mainCard__seats">
      {class4 && count4 && price4 && (
        <TicketSeatsRow
          carriageClass={carriageTypes.class4}
          ticketsAmount={count4}
          ticketsPrice={price4}
        />
      )}
      {class3 && count3 && price3 && (
        <TicketSeatsRow
          carriageClass={carriageTypes.class3}
          ticketsAmount={count3}
          ticketsPrice={price3}
        />
      )}
      {class2 && count2 && price2 && (
        <TicketSeatsRow
          carriageClass={carriageTypes.class2}
          ticketsAmount={count2}
          ticketsPrice={price2}
        />
      )}
      {class1 && count1 && price1 && (
        <TicketSeatsRow
          carriageClass={carriageTypes.class1}
          ticketsAmount={count1}
          ticketsPrice={price1}
        />
      )}
      <TicketServices
        services={{ have_wifi, is_express, have_air_conditioning }}
      />
      <div className="seats__button">
        <button onClick={() => selectTrain(train)}>Выбрать места</button>
      </div>
    </div>
  );
});

export default TicketSeats;
