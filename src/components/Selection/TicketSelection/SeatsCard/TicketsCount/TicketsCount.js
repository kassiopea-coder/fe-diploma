import { memo, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Input } from "antd";
import "./ticketsCount.css";

import {
  appStateSetAdultCount,
  appStateSetChildrenCount,
  appStateSetToddlerCount,
} from "../../../../../store/appState";

const TicketsCount = memo(({ getTicketsCount }) => {
  const dispatch = useDispatch();

  const maxAdultTicketsCount = 5;
  const [adultCount, setAdultCount] = useState(0);
  const [childrenCount, setChildrenCount] = useState(0);
  const [childrenMax, setChildrenMax] = useState(0);
  const [toddlerCount, setToddlerCount] = useState(0);
  const [toddlerMax, setToddlerMax] = useState(0);

  useEffect(() => {
    const rest = adultCount * 2 - childrenCount - toddlerCount;
    if (rest < 0 && toddlerCount > 0) {
      setToddlerCount(toddlerCount - 1);
    }
    if (rest < 0 && toddlerCount === 0) {
      setChildrenCount(childrenCount - 1);
    }
    setChildrenMax(rest);
    setToddlerMax(rest);
    getTicketsCount(adultCount, childrenCount, toddlerCount);

    dispatch(appStateSetAdultCount(adultCount));
    dispatch(appStateSetChildrenCount(childrenCount));
    dispatch(appStateSetToddlerCount(toddlerCount));
  }, [dispatch, adultCount, childrenCount, getTicketsCount, toddlerCount]);

  return (
    <div className="informationBlock__seatsCount">
      <div className="seatsCount__title">Количество билетов</div>
      <div className="seatsCount__blocks">
        <div className="seatsCount__block">
          <Input
            type="number"
            prefix="Взрослых — "
            defaultValue={0}
            value={adultCount}
            min={0}
            max={maxAdultTicketsCount}
            className="countBlock__field"
            onChange={(e) => setAdultCount(Number(e.target.value))}
          />
          <div className="countBlock__info">
            Можно добавить еще {maxAdultTicketsCount - adultCount} пассажиров
          </div>
        </div>
        <div className="seatsCount__block">
          <Input
            type="number"
            prefix="Детских — "
            defaultValue={0}
            value={childrenCount}
            min={0}
            max={childrenMax + childrenCount}
            className="countBlock__field"
            id="kids"
            onChange={(e) => setChildrenCount(Number(e.target.value))}
          />
          <div className="countBlock__info">
            Можно добавить еще {childrenMax} билетов для детей до 10 лет. Свое
            место в вагоне, как у взрослых, но дешевле в среднем на 50-65%
          </div>
        </div>
        <div className="seatsCount__block">
          <Input
            type="number"
            prefix="Детских «без места» — "
            defaultValue={0}
            value={toddlerCount}
            min={0}
            max={toddlerMax + toddlerCount}
            className="countBlock__field"
            onChange={(e) => setToddlerCount(Number(e.target.value))}
          />
        </div>
      </div>
    </div>
  );
});

export default TicketsCount;
