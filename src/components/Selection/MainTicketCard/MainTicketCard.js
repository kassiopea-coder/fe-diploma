import { memo } from "react";
import "./mainTicketCard.css";

import TrainRow from "./TrainRow";
import TicketSeats from "./TicketSeats/TicketSeats";

import trainImg from "./img/train.png";
import arrowLight from "../../../img/arrow_light.png";
import arrowDark from "../../../img/arrow_dark.png";

import { capitalize } from "../../../utils/capitalize";

const MainTicketCard = memo(({ trains }) => {
  const train0 = trains[0];
  const train1 = trains[1];

  const trainId = train0.departure.train._id;
  const trainName = train0.departure.train.name;
  const pointA = capitalize(train0.departure.from.city.name);
  const pointB = capitalize(train0.departure.to.city.name);

  return (
    <div className="mainCard__container">
      <div className="mainCard__side">
        <div className="side__img">
          <img src={trainImg} alt="train" />
        </div>
        <div className="side__trainNumber">{trainId}</div>
        <div className="side__trainDirections">
          <div className="trainDirections__from">
            {pointA}&nbsp; <img src={arrowLight} alt="arrow" />
          </div>
          <div className="trainDirections__to">
            {pointB} <img src={arrowDark} alt="arrow" />
          </div>
          {trainName && (
            <div className="trainDirections__to">&laquo;{trainName}&raquo;</div>
          )}
        </div>
      </div>
      <div className="mainCard__middle">
        <TrainRow train={train0} direction />
        {train1 && <TrainRow train={train1} direction={false} />}
      </div>
      <TicketSeats train={train0} />
    </div>
  );
});

export default MainTicketCard;
