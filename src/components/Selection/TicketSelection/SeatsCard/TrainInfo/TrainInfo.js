import { memo } from "react";
import "./trainInfo.css";
import arrowDark from "../../../../../img/arrow_dark.png";
import arrowTo from "../../../../../img/arrow_to.png";
import clock from "../../../../../img/clock.png";
import trainAva from "../../../../../img/little-train.png";

const TrainInfo = memo(({ info }) => {
  const {
    type,
    trainId,
    pointA,
    stationA,
    timeA,
    pointB,
    stationB,
    timeB,
    duration,
  } = info;

  return (
    <div className="informationBlock__train">
      <div className="train__exactInfo">
        <div className="exactInfo__trainAva">
          <img src={trainAva} alt="train" />
        </div>
        <div className="exactInfo__trainDetails">
          <div className="exactInfo__trainNumber">{trainId}</div>
          <div className="exactInfo__trainDirections">
            <div className="trainDirections__to">
              {pointA} <img src={arrowDark} alt="arrow" />
            </div>
            <div className="trainDirections__to">{pointB}</div>
          </div>
        </div>
      </div>
      <div className="train__destinationsInfo">
        <div className="mainCard__middle">
          <div className="middle__row">
            <div className="row__point">
              <div className="row__time">{timeA}</div>
              <div className="row__city">{pointA}</div>
              <div className="row__station">{stationA}</div>
            </div>
            <div className="row__direction destinationsInfo">
              <div className="direction__arrow">
                {type === "outbound" && <img src={arrowTo} alt="arrow" />}
              </div>
            </div>
            <div className="row__point">
              <div className="row__time">{timeB}</div>
              <div className="row__city">{pointB}</div>
              <div className="row__station">{stationB}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="train__travelTimeInfo">
        <div className="travelTimeInfo__img">
          <img src={clock} alt="clock" />
        </div>
        <div className="travelTimeInfo__time">
          <div>{duration.hours}</div>
          <div>{duration.minutes}</div>
        </div>
      </div>
    </div>
  );
});

export default TrainInfo;
