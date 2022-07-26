import "./successfulPage.css";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { memo } from "react";
import { Rate } from "antd";
import { StarOutlined } from "@ant-design/icons";
import Header from "./../../components/Header/Header";
import rub from "../../img/rub.png";
import icon1 from "./img/icon1.svg";
import icon2 from "./img/icon2.svg";
import icon3 from "./img/icon3.svg";

import { appStateSetProgress } from "../../store/appState";
import { resetPersonalInitials } from "../../store/personalData";

const SuccessfulPage = memo(() => {
  const dispatch = useDispatch();
  const history = useHistory();

  const totalPrice = useSelector((state) => state.appState.totalPrice);
  const name = useSelector((state) => state.personalData.name);
  const patr = useSelector((state) => state.personalData.patr);

  return (
    <div className="success__container">
      <Header headerType="success" />
      <div className="success__content">
        <div className="success__header">
          <div className="success__order">
            №Заказа <span>{Math.floor(Math.random() * 1000)}АА</span>
          </div>
          <div className="success__sum">
            сумма <span>{totalPrice}</span> <img src={rub} alt="rub" />
          </div>
        </div>
        <div className="success__progress">
          <div className="progress__item">
            <div className="progress__img">
              <img src={icon1} alt="icon" />
            </div>
            <div className="progress__text">
              билеты будут <br /> отправлены <br /> на ваш <span>e-mail</span>
            </div>
          </div>
          <div className="progress__item">
            <div className="progress__img">
              <img src={icon2} alt="icon" />
            </div>
            <div className="progress__text">
              <span>распечатайте</span> <br /> и сохраняйте билеты <br /> до
              даты поездки
            </div>
          </div>
          <div className="progress__item">
            <div className="progress__img">
              <img src={icon3} alt="icon" />
            </div>
            <div className="progress__text">
              <span>предьявите</span> <br /> распечатанные <br /> билеты при
              посадке
            </div>
          </div>
        </div>
        <div className="success__message">
          <p className="message__name">
            {name} {patr}!
          </p>
          <p className="message__text">
            Ваш заказ успешно оформлен. <br /> В ближайшее время с вами свяжется
            наш оператор для подтверждения.
          </p>
          <p className="message__thanks">
            Благодарим Вас за оказанное доверие и желаем приятного путешествия!
          </p>
        </div>
        <div className="success__footer">
          <div className="successFooter__title">Оценить сервис</div>
          <Rate character={<StarOutlined style={{ fontSize: "48px" }} />} />
          <button
            className="successFooter__button"
            onClick={() => {
              dispatch(appStateSetProgress(0));
              dispatch(resetPersonalInitials());
              history.push("/");
            }}
          >
            Вернуться на главную
          </button>
        </div>
      </div>
    </div>
  );
});

export default SuccessfulPage;
