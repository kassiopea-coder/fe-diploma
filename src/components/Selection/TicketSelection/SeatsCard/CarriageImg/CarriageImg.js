import { memo } from "react";
import "./carriageImg.css";

import first from "./img/1.png";
import second from "./img/2.png";
import third from "./img/3.png";
import fourth from "./img/4.png";

const scheme = {
  first,
  second,
  third,
  fourth,
};

const CarriageImg = memo(({ activeCarriage, selectSeats, selectedSeats }) => {
  const { seats, coach } = activeCarriage;
  const coachId = coach._id;
  const carriageType = coach.class_type;

  const selected = selectedSeats
    .filter((el) => el.coachId === coachId)
    .map((el) => el.seatId);

  const onSeatSelect = (idx) => {
    let price;
    if (carriageType === "first") {
      price = activeCarriage.coach.price;
    }
    if (carriageType === "fourth") {
      price = activeCarriage.coach.top_price;
    }
    if (carriageType === "second") {
      price =
        idx % 2
          ? activeCarriage.coach.bottom_price
          : activeCarriage.coach.top_price;
    }
    if (carriageType === "third") {
      if (idx < 33) {
        price =
          idx % 2
            ? activeCarriage.coach.bottom_price
            : activeCarriage.coach.top_price;
      }
      if (idx >= 33) {
        price = activeCarriage.coach.side_price;
      }
    }
    selectSeats({ coachId, seatId: idx, price: price || 0 });
  };

  return (
    <div className="carriageBlock__root">
      <img src={scheme[carriageType]} className="schemeImg" alt="inside" />
      <div className="schemeLayout">
        <div className="carriageNumber">{coachId}</div>
        <div className="scheme">
          <div className={carriageType}>
            {seats.map((seat) => (
              <button
                type="button"
                key={seat.index}
                className={
                  selected.some((el) => el === seat.index)
                    ? `seat seat${seat.index} selected`
                    : `seat seat${seat.index}`
                }
                disabled={!seat.available}
                onClick={() => onSeatSelect(seat.index)}
              >
                {seat.index}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

export default CarriageImg;
