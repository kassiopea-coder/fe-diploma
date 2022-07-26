import { memo, useRef } from "react";
import { Tooltip } from "antd";
import rub from "../img/rub.png";

const minValue = (obj) => {
  const arr = Object.values(obj);
  return Math.min(...arr);
};

const TicketSeatsRow = memo(
  ({ carriageClass, ticketsAmount, ticketsPrice }) => {
    const row = useRef(null);
    const lowPrice = minValue(ticketsPrice);

    const tooltipData = (data) => {
      const array = Object.entries(data);
      const newArray = [];
      array.forEach((el) => {
        switch (el[0]) {
          case "top_price":
            newArray.push(["верхние", el[1]]);
            break;
          case "bottom_price":
            newArray.push(["нижние", el[1]]);
            break;
          case "side_price":
            newArray.push(["боковые", el[1]]);
            break;
          case "price":
            newArray.push(["СВ", el[1]]);
            break;
          default:
            break;
        }
      });
      return newArray;
    };

    const arrOfPrices = tooltipData(ticketsPrice);
    const tooltip = (
      <div className="tooltip__container">
        {arrOfPrices.map((el) => (
          <div className="tooltip__row" key={el[0]}>
            <div className="tooltip__txt">{el[0]}</div>
            <div className="tooltip__price">{el[1]}</div>
            <div className="tooltip__rub">
              <img src={rub} alt="rub" />
            </div>
          </div>
        ))}
      </div>
    );

    return (
      <>
        {(carriageClass === "Люкс" || carriageClass === "Сидячий") && (
          <div className="seats__row" ref={row}>
            <div className="seats__name">{carriageClass}</div>
            <div className="seats__amount">{ticketsAmount}</div>
            <div className="seats__price">
              <span className="price__from">от</span>
              <span className="price__value">{lowPrice}</span>
              <span className="price__rubIcon">
                <img src={rub} alt="rub" />
              </span>
            </div>
          </div>
        )}
        {carriageClass !== "Люкс" && carriageClass !== "Сидячий" && (
          <Tooltip
            placement="bottom"
            title={tooltip}
            mouseEnterDelay={0.3}
            mouseLeaveDelay={0.3}
            trigger="hover"
            getPopupContainer={() => row.current}
            overlayClassName="tooltip"
            destroyTooltipOnHide
          >
            <div className="seats__row" ref={row}>
              <div className="seats__name">{carriageClass}</div>
              <div className="seats__amount">{ticketsAmount}</div>
              <div className="seats__price">
                <span className="price__from">от</span>
                <span className="price__value">{lowPrice}</span>
                <span className="price__rubIcon">
                  <img src={rub} alt="rub" />
                </span>
              </div>
            </div>
          </Tooltip>
        )}
      </>
    );
  }
);

export default TicketSeatsRow;
