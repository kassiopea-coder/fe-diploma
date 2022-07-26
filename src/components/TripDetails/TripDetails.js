import { memo, useRef } from "react";
import "./tripDetails.css";
import { Collapse } from "antd";
import { ReactComponent as Plus } from "./img/plus.svg";
import { ReactComponent as Minus } from "./img/minus.svg";
import arrowTo from "../../img/arrow_to.png";
import arrowBack from "../../img/arrow_back.png";
import { sec2hhmm, secToDateTime } from "./../../utils/timing";
import { capitalize } from "./../../utils/capitalize";

const { Panel } = Collapse;

const TripDetails = memo(({ icon, title, data, direction }) => {
  const forward = useRef(null);

  const trainId = data.departure.train._id;
  const trainName = data.departure.train.name;
  const timeA = secToDateTime(data.departure.from.datetime);
  const timeB = secToDateTime(data.departure.to.datetime);
  const duration = sec2hhmm(data.departure.duration);
  const pointA = capitalize(data.departure.from.city.name);
  const pointB = capitalize(data.departure.to.city.name);
  const stationA = capitalize(data.departure.from.railway_station_name);
  const stationB = capitalize(data.departure.to.railway_station_name);

  return (
    <div className="tripDetails__container">
      <Collapse
        ghost
        expandIconPosition="right"
        expandIcon={({ isActive }) => (isActive ? <Minus /> : <Plus />)}
      >
        <Panel
          header={
            <div className="tripDetails__header">
              <div className="tripDetails__icon">
                <img src={icon} alt="arrow" />
              </div>
              <div className="tripDetails__title">{title}</div>
              <div className="tripDetails__date"></div>
            </div>
          }
          key={1}
        >
          <div className="tripDetails__panel" ref={forward}>
            <div className="tripDetails__row">
              <div className="tripDetails__rowTitle">№ Поезда</div>
              <div className="tripDetails__trainValue">{trainId}</div>
            </div>
            <div className="tripDetails__row">
              <div className="tripDetails__rowTitle">Название</div>
              <div className="tripDetails__rowValue">{trainName}</div>
            </div>
            <div className="tripDetails__timing">
              <div className="tripDetails__timingFrom">
                <div className="timing__time">{timeA}</div>
                <div className="timing__date"></div>
              </div>
              <div className="tripDetails__direction">
                <div className="tripDetails__directionTime">
                  {duration.hh}:{duration.mm}
                </div>
                <div className="direction__arrow">
                  {direction && <img src={arrowTo} alt="arrow" />}
                  {!direction && <img src={arrowBack} alt="arrow" />}
                </div>
              </div>
              <div className="tripDetails__timingTo">
                <div className="timing__time">{timeB}</div>
                <div className="timing__date"></div>
              </div>
            </div>
            <div className="tripDetails__stations">
              <div className="tripDetails__stationsFrom">
                <div className="stations__city">{pointA}</div>
                <div className="stations__station">{stationA}</div>
              </div>
              <div className="tripDetails__stationsTo">
                <div className="stations__city">{pointB}</div>
                <div className="stations__station">{stationB}</div>
              </div>
            </div>
          </div>
        </Panel>
      </Collapse>
    </div>
  );
});

export default TripDetails;
