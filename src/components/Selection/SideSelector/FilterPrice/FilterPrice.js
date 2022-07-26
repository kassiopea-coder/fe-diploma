import "./filterPrice.css";
import { Slider } from "antd";
import { memo, useState } from "react";
import { useDispatch } from "react-redux";
import { searchParamsFiltersSet } from "../../../../store/params";

const FilterPrice = memo(({ initialRange, stubRange }) => {
  const dispatch = useDispatch();

  const [range, setRange] = useState(initialRange);
  const min = initialRange[0];
  const max = initialRange[1];

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
        searchParamsFiltersSet({ price_from: value[0], price_to: value[1] })
      );
      setRange(setValue);
    }
  };

  return (
    <div className="filterPrice__container">
      <div className="filterPrice__title">Стоимость</div>
      <div className="filterPrice__limits">
        <span>от</span>
        <span>до</span>
      </div>
      <div className="filterPrice__slider">
        <Slider
          min={stubRange.min}
          max={stubRange.max}
          range={{ draggableTrack: true }}
          step={10}
          defaultValue={range}
          tooltipVisible
          tooltipPlacement="bottom"
          onChange={(value) => onChangeRange(value)}
        />
      </div>
    </div>
  );
});

export default FilterPrice;
