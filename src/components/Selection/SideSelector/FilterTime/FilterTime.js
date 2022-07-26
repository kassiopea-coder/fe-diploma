import { memo, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./filterTime.css";
import { Collapse, Slider } from "antd";
import { searchParamsFiltersSet } from "../../../../store/params";

import { ReactComponent as Plus } from "./img/plus.svg";
import { ReactComponent as Minus } from "./img/minus.svg";

const { Panel } = Collapse;

const FilterTime = memo(({ icon, type }) => {
  const dispatch = useDispatch();
  const forward = useRef(null);

  const filters = useSelector((state) => state.params.filters);

  const [range, setRange] = useState([0, 1440]);
  const min = 0;
  const max = 1440;

  const {
    start_departure_hour_from = min,
    start_departure_hour_to = max,
    start_arrival_hour_from = min,
    start_arrival_hour_to = max,
    end_departure_hour_from = min,
    end_departure_hour_to = max,
    end_arrival_hour_from = min,
    end_arrival_hour_to = max,
  } = filters;

  const text = {
    outbound: {
      title: "Туда",
      first: "start_departure",
      second: "start_arrival",
      firstRange: [start_departure_hour_from, start_departure_hour_to],
      secondRange: [start_arrival_hour_from, start_arrival_hour_to],
    },
    return: {
      title: "Обратно",
      first: "end_departure",
      second: "end_arrival",
      firstRange: [end_departure_hour_from, end_departure_hour_to],
      secondRange: [end_arrival_hour_from, end_arrival_hour_to],
    },
  };

  const onChangeRange = (value) => {
    if (typeof value === "number") {
      const minValue = 0;
      const maxValue = max > value ? value : max;
      const setValue = [minValue, maxValue];
      setRange(setValue);
    } else {
      const minValue = min < value[0] ? value[0] : min;
      const maxValue = max > value[1] ? value[1] : max;
      const setValue = [minValue, maxValue];
      dispatch(
        searchParamsFiltersSet({
          [`${type}_hour_from`]: value[0],
          [`${type}_hour_to`]: value[1],
        })
      );
      setRange(setValue);
    }
  };

  const formatterDuration = (value) => {
    if (typeof value === "undefined") {
      return "";
    }
    const hour = Math.floor(value / 60);
    const minutes = value - hour * 60;
    return `${`0${hour}`.slice(-2)}:${`0${minutes}`.slice(-2)}`;
  };

  return (
    <div className="time__container">
      <Collapse
        ghost
        expandIconPosition="right"
        expandIcon={({ isActive }) => (isActive ? <Minus /> : <Plus />)}
      >
        <Panel
          header={
            <div className="time__header">
              <div className="header__icon">
                <img src={icon} alt="arrow" />
              </div>
              <div className="header__title">{text[type].title}</div>
            </div>
          }
          key={1}
        >
          <div className="time__panel" ref={forward}>
            <div className="time__subtitle timeTo">Время отбытия</div>
            <Slider
              max={max}
              min={min}
              range={{ draggableTrack: true }}
              step={30}
              defaultValue={range}
              tooltipVisible
              tooltipPlacement="bottom"
              tipFormatter={(value) => formatterDuration(value)}
              onChange={(value) => onChangeRange(value)}
              getTooltipPopupContainer={() => forward.current}
            />
            <div className="time__subtitle timeBack">Время прибытия</div>
            <Slider
              max={max}
              min={min}
              range={{ draggableTrack: true }}
              step={30}
              defaultValue={range}
              tooltipVisible
              tooltipPlacement="bottom"
              tipFormatter={(value) => formatterDuration(value)}
              onChange={(value) => onChangeRange(value)}
              getTooltipPopupContainer={() => forward.current}
            />
          </div>
        </Panel>
      </Collapse>
    </div>
  );
});

export default FilterTime;
