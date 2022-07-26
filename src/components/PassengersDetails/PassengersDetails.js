import { memo, useRef } from "react";
import { useSelector } from "react-redux";
import "./passengersDetails.css";
import { Collapse } from "antd";
import { ReactComponent as Plus } from "./img/plus.svg";
import { ReactComponent as Minus } from "./img/minus.svg";
import passeng_av from "../../img/passeng_av.svg";

const { Panel } = Collapse;

const PassengersDetails = memo(() => {
  const forward = useRef(null);

  const adultPassengers = useSelector((state) => state.appState.adultCount);
  const childPassengers = useSelector((state) => state.appState.childrenCount);

  return (
    <div className="passengDetails__container">
      <Collapse
        ghost
        expandIconPosition="right"
        expandIcon={({ isActive }) => (isActive ? <Minus /> : <Plus />)}
      >
        <Panel
          header={
            <div className="passengDetails__header">
              <div className="passengDetails__icon">
                <img src={passeng_av} alt="arrow" />
              </div>
              <div className="passengDetails__title">Пассажиры</div>
            </div>
          }
          key={1}
        >
          <div className="passengDetails__panel" ref={forward}>
            <div className="passengDetails__row">
              <div className="passengDetails__age">
                <span>{adultPassengers}</span>{" "}
                {adultPassengers === 1 ? "Взрослый" : "Взрослых"}
              </div>
            </div>
            <div className="passengDetails__row">
              <div className="passengDetails__age">
                <span>{childPassengers}</span>{" "}
                {childPassengers === 1 ? "Детский" : "Детских"}
              </div>
            </div>
          </div>
        </Panel>
      </Collapse>
    </div>
  );
});

export default PassengersDetails;
