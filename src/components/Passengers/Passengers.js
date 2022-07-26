import { memo } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./passengers.css";
import rub from "../../img/rub.png";
import PassengerCard from "./../PassengerCard/PassengerCard";
import { appStateSetProgress } from "../../store/appState";

const Passengers = memo(() => {
  const history = useHistory();
  const dispatch = useDispatch();

  const items = useSelector((state) => state.passengersData.items);
  const totalPrice = useSelector((state) => state.appState.totalPrice);

  const changePassengersData = () => {
    dispatch(appStateSetProgress(1));
    history.push("./passengers");
  };

  return (
    <div className="confirm__passengers">
      <div className="passengers__title">Пассажиры</div>
      <div className="passengers__info">
        <div className="passengers__names">
          {items.map((el) => (
            <PassengerCard
              key={el.id}
              age={el.age}
              surname={el.surname}
              name={el.name}
              patr={el.patr}
              sex={el.sex}
              bd={el.bd}
              dysmobility={el.dysmobility}
              document={el.document}
              passportSeria={el.passport.seria}
              passportNumber={el.passport.number}
              bdCertif={el.bdCertif}
            />
          ))}
        </div>
        <div className="passengers__price">
          <div>
            Всего <span>{totalPrice}</span> <img src={rub} alt="rub"></img>
          </div>
          <button onClick={changePassengersData}>Изменить</button>
        </div>
      </div>
    </div>
  );
});

export default Passengers;
