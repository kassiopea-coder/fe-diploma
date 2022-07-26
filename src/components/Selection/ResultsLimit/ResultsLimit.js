import { memo } from "react";
import { Button } from "antd";
import "./resultsLimit.css";

const ResultsLimit = memo(({ variants, active, onClick }) => {
  return (
    <div className="resultsLimit__values">
      {variants.map((el) => (
        <Button
          type="text"
          className={
            el === active ? "resultsLimit__active" : "resultsLimit__btn"
          }
          key={el}
          size="small"
          onClick={() => onClick(el)}
        >
          {el}
        </Button>
      ))}
    </div>
  );
});

export default ResultsLimit;
