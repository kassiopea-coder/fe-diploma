import { memo } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import "./confirmPage.css";
import Header from "../../components/Header/Header";
import ProgressBar from "./../../components/ProgressBar/ProgressBar";
import MainTicketCard from "./../../components/Selection/MainTicketCard/MainTicketCard";
import Passengers from "../../components/Passengers/Passengers";
import Payment from "../../components/Payment/Payment";
import TripDetails from "../../components/TripDetails/TripDetails";
import PassengersDetails from "../../components/PassengersDetails/PassengersDetails";

import forward from "../../img/forward.svg";
import back from "../../img/back.svg";
import rub from "../../img/rub_light.png";

const ConfirmPage = memo(() => {
  const history = useHistory();

  const selectedTrainOut = useSelector((state) => state.appState.trainOutbound);
  const selectedTrainRet = useSelector((state) => state.appState.trainReturn);
  const totalPrice = useSelector((state) => state.appState.totalPrice);
  const childrenCount = useSelector((state) => state.appState.childrenCount);
  const toddlerCount = useSelector((state) => state.appState.toddlerCount);
  const selectedSeats = useSelector((state) => state.appState.selectedSeats);

  const trainsPair = [selectedTrainOut, selectedTrainRet];

  const surname = useSelector((state) => state.personalData.surname);
  const name = useSelector((state) => state.personalData.name);
  const patr = useSelector((state) => state.personalData.patr);
  const phone = useSelector((state) => state.personalData.phone);
  const email = useSelector((state) => state.personalData.email);
  const payCash = useSelector((state) => state.personalData.payCash);
  const passengers = useSelector((state) => state.passengersData.items);

  const toSuccessPage = () => {
    fetch("https://fe-diplom.herokuapp.com/order", {
      method: "POST",
      body: JSON.stringify({
        user: {
          first_name: name,
          last_name: surname,
          patronymic: patr,
          phone: phone,
          email: email,
          payment_method: payCash ? "cash" : "online",
        },
        departure: {
          route_direction_id: selectedTrainOut.departure._id,
          seats: [
            {
              coach_id: selectedSeats[0].coachId,
              person_info: {
                is_adult: passengers[0].age === "Взрослый" ? true : false,
                first_name: passengers[0].name,
                last_name: passengers[0].surname,
                patronymic: passengers[0].patr,
                gender: true,
                birthday: passengers[0].bd,
                document_type: passengers[0].document,
                document_data: `${passengers[0].passport.seria} ${passengers[0].passport.number}`,
              },
              seat_number: selectedSeats[0].seatId,
              is_child: childrenCount > 0 ? true : false,
              include_children_seat: toddlerCount > 0 ? true : false,
            },
          ],
        },
      }),
    }).then((response) => response.json());

    history.push("./success");
  };

  return (
    <div>
      <Header headerType="select" />
      <ProgressBar />
      <div className="confirm__container">
        <div className="confirm__sidebar">
          <div className="confirm__sidebarTitle">Детали поездки</div>
          <div className="confirm__sidebarMiddle">
            <TripDetails
              icon={forward}
              title="Туда"
              data={selectedTrainOut}
              direction="forward"
            />
            {selectedTrainRet && (
              <TripDetails
                icon={back}
                title="Обратно"
                data={selectedTrainRet}
              />
            )}
            <PassengersDetails />
          </div>
          <div className="confirm__sidebarResult">
            Итог <span>{totalPrice}</span> <img src={rub} alt="rub" />
          </div>
        </div>
        <div className="confirm__main">
          <div className="confirm__ticket">
            <div className="ticket__title">Поезд</div>
            <MainTicketCard trains={trainsPair} />
          </div>
          <Passengers />
          <div className="confirm__pay">
            <div className="pay__title">Способ оплаты</div>
            <Payment />
          </div>
          <button className="confirm__button" onClick={toSuccessPage}>
            Подтвердить
          </button>
        </div>
      </div>
    </div>
  );
});

export default ConfirmPage;
