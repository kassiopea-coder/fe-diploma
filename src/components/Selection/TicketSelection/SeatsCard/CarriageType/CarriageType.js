import { memo } from "react";
import "./carriageType.css";

import sitting from "../../../../../img/sitting.png";
import platz from "../../../../../img/platz.png";
import compartment from "../../../../../img/compartment_grey.svg";
import lux from "../../../../../img/lux.png";

const carriageTypes = {
  first: { element: lux, title: "Люкс" },
  second: { element: compartment, title: "Купе" },
  third: { element: platz, title: "Плацкарт" },
  fourth: { element: sitting, title: "Сидячий" },
};

const CarriageType = memo(({ carriageType, toggleType, available, active }) => {
  return (
    <>
      <button
        className="type__block"
        onClick={() => toggleType(carriageType)}
        disabled={!available}
      >
        <img
          src={carriageTypes[carriageType].element}
          alt={carriageTypes[carriageType].title}
        />
        <div
          className={
            active === carriageType ? "type__name active" : "type__name"
          }
        >
          {carriageTypes[carriageType].title}
        </div>
      </button>
    </>
  );
});

export default CarriageType;
