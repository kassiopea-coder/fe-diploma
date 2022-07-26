import { memo } from "react";
import "./carriageNumber.css";

const CarriageNumber = memo(
  ({ toggleCarriage, activeCarriage, buttonNumber }) => {
    return (
      <button
        className={
          activeCarriage === buttonNumber
            ? "carriageNumber__button_active"
            : "carriageNumber__button"
        }
        onClick={() => toggleCarriage(buttonNumber)}
        disabled={activeCarriage === buttonNumber}
      >
        {buttonNumber}
      </button>
    );
  }
);

export default CarriageNumber;
