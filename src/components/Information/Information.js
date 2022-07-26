import React from "react";
import "./information.scss";
import info1 from "./img/info1.png";
import info2 from "./img/info2.png";
import info3 from "./img/info3.png";

export default function Information() {
  return (
    <section className="information" id="information">
      <div className="container">
        <div className="header">
          <h2 className="title">Как это работает</h2>
          <button className="button">Узнать больше</button>
        </div>
        <ul className="list">
          <li className="information__item">
            <img className="item__img" src={info1} alt="1" />
            <div className="item__text">Удобный заказ на сайте</div>
          </li>
          <li className="information__item">
            <img className="item__img" src={info2} alt="2" />
            <div className="item__text">Нет необходимости ехать в офис</div>
          </li>
          <li className="information__item">
            <img className="item__img" src={info3} alt="3" />
            <div className="item__text">Огромный выбор направлений</div>
          </li>
        </ul>
      </div>
    </section>
  );
}
