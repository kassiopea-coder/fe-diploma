import { memo } from "react";
import "./passengerCard.scss";
import ava from "../../img/avatar.png";

const PassengerCard = memo(
  ({
    age,
    surname,
    name,
    patr,
    sex,
    bd,
    dysmobility,
    document,
    passportSeria,
    passportNumber,
    bdCertif,
  }) => {
    return (
      <div className="names__card">
        <div className="card__img">
          <div>
            <img src={ava} alt="avatar" />
          </div>
          <span>{age}</span>
        </div>
        <div className="card__details">
          <div className="initials">
            {surname} {name} {patr}
          </div>
          <div className="details__sex">{sex}</div>
          <div className="details__birthday">Дата рождения {bd}</div>
          {passportSeria && (
            <div className="details__passport">
              {document} {passportSeria} {passportNumber}
            </div>
          )}
          {bdCertif && (
            <div className="details__passport">
              {document} {bdCertif}
            </div>
          )}
          {dysmobility && (
            <div className="details__dysmobility">ограниченная подвижность</div>
          )}
        </div>
      </div>
    );
  }
);

export default PassengerCard;
