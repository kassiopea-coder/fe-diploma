import "./popupInfo.css";
import img from "../../img/exclamation_point_grey.png";

export default function PopupInfo({ message, action }) {
  return (
    <div className="popup__wrapper">
      <div className="popupInfo__container">
        <div className="popupInfo__header">
          <img src={img} alt="exclamation" />
        </div>
        <div className="popupInfo__message">{message}</div>
        <div className="popupInfo__footer">
          <button className="popupError__button" onClick={action}>
            Понятно
          </button>
        </div>
      </div>
    </div>
  );
}
