import "./popupError.css";
import img from "../../img/exclamation_point_light.png";

export default function PopupError() {
  return (
    <div className="popupError__container">
      <div className="popupError__header">
        <img src={img} alt="exclamation" />
      </div>
      <div className="popupError__message">Something went wrong...</div>
      <div className="popupError__footer">
        <button className="popupError__button">Понятно</button>
      </div>
    </div>
  );
}
