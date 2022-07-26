import { memo } from "react";
import "./carriageType.css";
import CarriageType from "./CarriageType";

const CarriageTypeSection = memo(({ data, chooseCarriageType, activeType }) => {
  return (
    <div className="informationBlock__type">
      <div className="type__title">Тип вагона</div>
      <div className="type__types">
        <CarriageType
          active={activeType}
          carriageType="fourth"
          toggleType={chooseCarriageType}
          available={data.have_fourth_class}
        />
        <CarriageType
          active={activeType}
          carriageType="third"
          toggleType={chooseCarriageType}
          available={data.have_third_class}
        />
        <CarriageType
          active={activeType}
          carriageType="second"
          toggleType={chooseCarriageType}
          available={data.have_second_class}
        />
        <CarriageType
          active={activeType}
          carriageType="first"
          toggleType={chooseCarriageType}
          available={data.have_first_class}
        />
      </div>
    </div>
  );
});

export default CarriageTypeSection;
