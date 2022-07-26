import { memo, useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./seatsCard.css";
import { message } from "antd";

import { capitalize } from "./../../../../utils/capitalize";
import { sec2hhmm, secToDateTime } from "./../../../../utils/timing";
import {
  appStateResetTrainOutbound,
  appStateResetTrainReturn,
  appStateSetTotalPrice,
  appStateSetSelectedSeats,
} from "../../../../store/appState";
import { trainSeatsReset } from "../../../../store/fetchSeats";

import TrainInfo from "./TrainInfo/TrainInfo";
import TicketsCount from "./TicketsCount/TicketsCount";
import CarriageTypeSection from "./CarriageType/CarriageTypesSection";
import CarriageNumber from "./CarriageNumber/CarriageNumber";
import CarriageServices from "./CarriageServices/CarriageServices";
import CarriageImg from "./CarriageImg/CarriageImg";

import arrowRight from "../../../../img/arrowRight.png";
import arrowLeft from "../../../../img/arrowLeft.png";
import rub from "../../../../img/rub.png";

const clearCarriage = {
  coach: {
    _id: 0,
    name: "",
    class_type: "first",
    have_wifi: false,
    have_air_conditioning: false,
    price: 0,
    top_price: 0,
    bottom_price: 0,
    side_price: 0,
    linens_price: 0,
    wifi_price: 0,
    is_linens_included: false,
    available_seats: 0,
    train: 0,
  },
  seats: [
    {
      index: 1,
      available: false,
    },
  ],
};

const SeatsCard = memo(({ type, data }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const trainSeats = useSelector((state) => state.trainSeats.items);
  const trainId = data.departure.train._id;
  const pointA = capitalize(data.departure.from.city.name);
  const pointB = capitalize(data.departure.to.city.name);
  const stationA = capitalize(data.departure.from.railway_station_name);
  const stationB = capitalize(data.departure.to.railway_station_name);
  const timeA = secToDateTime(data.departure.from.datetime);
  const timeB = secToDateTime(data.departure.to.datetime);
  const duration = sec2hhmm(data.departure.duration);

  const [carriageType, setCarriageType] = useState(undefined);
  const [totalPrice, setTotalPrice] = useState(0);
  const [activeCarriage, setActiveCarriage] = useState(clearCarriage);
  const [ticketsCount, setTicketsCount] = useState({
    adultCount: 0,
    childrenCount: 0,
    toddlerCount: 0,
  });
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedServices, setSelectedServices] = useState([]);

  const anotherTrain = (data) => {
    if ((data = "outbound")) {
      dispatch(appStateResetTrainOutbound());
    } else if (data === "return") {
      dispatch(appStateResetTrainReturn());
    }
    dispatch(trainSeatsReset());
    history.push("./selection");
  };

  const chooseCarriageType = (value) => {
    setCarriageType(value);
  };

  const toggleCarriage = (number) => {
    const newCarriage = trainSeats.find((coach) => coach.coach._id === number);
    if (newCarriage) {
      setActiveCarriage(newCarriage);
    }
  };

  const selectSeats = (arg) => {
    const existId = selectedSeats.findIndex(
      (el) => el.coachId === arg.coachId && el.seatId === arg.seatId
    );
    if (existId === -1) {
      const availableToAdd =
        ticketsCount.adultCount +
        ticketsCount.childrenCount -
        selectedSeats.length;
      if (availableToAdd > 0) {
        setSelectedSeats([...selectedSeats, arg]);
      } else {
        const warning = () => {
          message
            .warning("Нельзя выбрать больше мест, чем выбрано билетов")
            .then();
        };
        warning();
      }
    } else {
      setSelectedSeats(selectedSeats.filter((el, idx) => idx !== existId));
    }
  };

  useEffect(() => {
    const firstCoach = trainSeats
      .filter((coach) => coach.coach.class_type === carriageType)
      .find((coach) => coach.coach._id);
    if (firstCoach) {
      setActiveCarriage(firstCoach);
    }
  }, [carriageType, trainSeats]);

  const getTicketsCount = useCallback(
    (adultCount, childrenCount, toddlerCount) => {
      setTicketsCount({ adultCount, childrenCount, toddlerCount });
    },
    []
  );

  useEffect(() => {
    const canGetSeats = ticketsCount.adultCount + ticketsCount.childrenCount;
    if (canGetSeats < selectedSeats.length) {
      const tempArr = [...selectedSeats];
      tempArr.length = canGetSeats;
      setSelectedSeats(tempArr);
    }
  }, [selectedSeats, ticketsCount]);

  useEffect(() => {
    const seatsSummaryPrice = selectedSeats.reduce(
      (sum, current) =>
        sum +
        current.price +
        Number(
          selectedServices
            .filter((el) => el.coachId === current.coachId)
            .map((el) => el.linen.price + el.wifi.price)
        ),
      0
    );
    setTotalPrice(seatsSummaryPrice);
    dispatch(appStateSetTotalPrice(seatsSummaryPrice));
    dispatch(appStateSetSelectedSeats(selectedSeats));
  }, [dispatch, selectedSeats, selectedServices]);

  return (
    <div className="seatsPage__informationBlock">
      <div className="informationBlock__header">
        <div className="informationBlock__arrowImg">
          {type === "outbound" && <img src={arrowRight} alt="arrowRight" />}
          {type === "return" && <img src={arrowLeft} alt="arrowLeft" />}
        </div>
        <div className="informationBlock__button">
          <button
            className="button__chooseTrain"
            onClick={() => anotherTrain(type)}
          >
            Выбрать другой поезд
          </button>
        </div>
      </div>
      <TrainInfo
        info={{
          type,
          trainId,
          pointA,
          stationA,
          timeA,
          pointB,
          stationB,
          timeB,
          duration,
        }}
      />

      <TicketsCount getTicketsCount={getTicketsCount} />

      <CarriageTypeSection
        data={{
          have_first_class: data.departure.have_first_class,
          have_second_class: data.departure.have_second_class,
          have_third_class: data.departure.have_third_class,
          have_fourth_class: data.departure.have_fourth_class,
        }}
        chooseCarriageType={chooseCarriageType}
        activeType={carriageType}
      />

      {carriageType !== undefined && (
        <div className="informationBlock__carriageBlock">
          <div className="carriageBlock__header">
            <div className="carriageBlock__carriages">
              Вагоны{" "}
              <span className="active-carriage">
                {trainSeats
                  .filter((item) => item.coach.class_type === carriageType)
                  .map((item) => (
                    <CarriageNumber
                      key={item.coach._id}
                      buttonNumber={item.coach._id}
                      toggleCarriage={(e) => toggleCarriage(e)}
                      activeCarriage={activeCarriage.coach._id}
                    />
                  ))}
              </span>
            </div>
            <div className="carriageBlock__subtitle">
              Нумерация вагонов начинается с головы поезда
            </div>
          </div>

          <div className="carriageBlock__details">
            <div className="carriage__number">
              <span>{activeCarriage.coach._id}</span> <br /> вагон
            </div>
            <div className="carriage__seatsInfo">
              <div className="seatsInfo__block">
                <div className="seatsInfo__title">
                  Места <span>{activeCarriage.seats.length}</span>
                </div>
                {carriageType === "first" && <></>}
                {carriageType === "second" && (
                  <>
                    <div className="seatsInfo__seats">
                      Верхние <span>{activeCarriage.seats.length}</span>
                    </div>
                    <div className="seatsInfo__seats">
                      Нижние <span>{activeCarriage.seats.length}</span>
                    </div>
                  </>
                )}
                {carriageType === "third" && (
                  <>
                    <div className="seatsInfo__seats">
                      Верхние <span>{activeCarriage.seats.length}</span>
                    </div>
                    <div className="seatsInfo__seats">
                      Нижние <span>{activeCarriage.seats.length}</span>
                    </div>
                    <div className="seatsInfo__seats">
                      Боковые <span>{activeCarriage.seats.length}</span>
                    </div>
                  </>
                )}
                {carriageType === "fourth" && <></>}
              </div>

              <div className="seatsInfo__block">
                <div className="seatsInfo__title">Стоимость</div>
                {carriageType === "first" && data.departure.price_info.first && (
                  <div className="seatsInfo__price">
                    {data.departure.price_info.first.price}{" "}
                    <img src={rub} alt="rub" />
                  </div>
                )}
                {carriageType === "second" && data.departure.price_info.second && (
                  <>
                    <div className="seatsInfo__price">
                      {data.departure.price_info.second.top_price}{" "}
                      <img src={rub} alt="rub" />
                    </div>
                    <div className="seatsInfo__price">
                      {data.departure.price_info.second.bottom_price}{" "}
                      <img src={rub} alt="rub" />
                    </div>
                  </>
                )}
                {carriageType === "third" && data.departure.price_info.third && (
                  <>
                    <div className="seatsInfo__price">
                      {data.departure.price_info.third.top_price}{" "}
                      <img src={rub} alt="rub" />
                    </div>
                    <div className="seatsInfo__price">
                      {data.departure.price_info.third.bottom_price}{" "}
                      <img src={rub} alt="rub" />
                    </div>
                    <div className="seatsInfo__price">
                      {data.departure.price_info.third.side_price}{" "}
                      <img src={rub} alt="rub" />
                    </div>
                  </>
                )}
                {carriageType === "fourth" && data.departure.price_info.fourth && (
                  <div className="seatsInfo__price">
                    {data.departure.price_info.fourth.top_price}{" "}
                    <img src={rub} alt="rub" />
                  </div>
                )}
              </div>

              <CarriageServices
                data={activeCarriage}
                selectedServices={selectedServices}
                setSelectedServices={setSelectedServices}
                selectedSeats={selectedSeats}
              />
            </div>
          </div>

          <div className="carriage__popup">
            <span>11</span> человек выбирают места в этом поезде
          </div>

          <CarriageImg
            activeCarriage={activeCarriage}
            selectedSeats={selectedSeats}
            selectSeats={selectSeats}
          />

          {totalPrice !== 0 && (
            <>
              <div className="totalPrice__container">
                <div className="totalPrice__number">{totalPrice}</div>
                <div className="totalPrice__rub">
                  <img src={rub} alt="rub" />
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
});

export default SeatsCard;
