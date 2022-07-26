import "./filterSeats.css";
import { Switch } from "antd";

export default function FilterSeats({
  icon,
  text,
  onChange,
  checked = false,
  filter,
}) {
  return (
    <li className="seat__container">
      <div className="seat__icon">
        <img src={icon} alt="icon" />
      </div>
      <div className="seat__text">{text}</div>
      <div className="seat__switch">
        <Switch
          checked={checked}
          onChange={(state) => {
            onChange(filter, state);
          }}
        />
      </div>
    </li>
  );
}
