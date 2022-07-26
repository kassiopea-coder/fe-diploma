import { memo } from "react";
import arrowTo from "../../../img/arrow_to.png";
import arrowBack from "../../../img/arrow_back.png";

import { capitalize } from "../../../utils/capitalize";
import { sec2hhmm, secToDateTime } from "../../../utils/timing";

const TrainRow = memo(({ train, direction }) => {
  const pointA = capitalize(train.departure.from.city.name);
  const pointB = capitalize(train.departure.to.city.name);
  const stationA = capitalize(train.departure.from.railway_station_name);
  const stationB = capitalize(train.departure.to.railway_station_name);
  const duration = sec2hhmm(train.departure.duration);
  const timeA = secToDateTime(train.departure.from.datetime);
  const timeB = secToDateTime(train.departure.to.datetime);

  return (
    <div className="middle__row">
      <div className="row__point">
        <div className="row__time">{timeA}</div>
        <div className="row__city">{pointA}</div>
        <div className="row__station">{stationA}</div>
      </div>
      <div className="row__direction">
        <div className="direction__time">{`${duration.hh}:${duration.mm}`}</div>
        <div className="direction__arrow">
          {direction && <img src={arrowTo} alt="arrow" />}
          {!direction && <img src={arrowBack} alt="arrow" />}
        </div>
      </div>
      <div className="row__point">
        <div className="row__time">{timeB}</div>
        <div className="row__city">{pointB}</div>
        <div className="row__station">{stationB}</div>
      </div>
    </div>
  );
});

export default TrainRow;
