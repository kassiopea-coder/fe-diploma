import { memo } from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Checkbox } from "antd";
import "./payPage.css";
import "./reantd.css";

import rub from "../../img/rub.png";
import forward from "../../img/forward.svg";
import back from "../../img/back.svg";

import Header from "../../components/Header/Header";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import TripDetails from "../../components/TripDetails/TripDetails";
import PassengersDetails from "../../components/PassengersDetails/PassengersDetails";
import PersonalData from "../../components/PersonalData/PersonalData";

import { appStateSetProgress } from "../../store/appState";
import { stateSetPayOnline, stateSetPayCash } from "../../store/personalData";

const PayPage = memo(() => {
  const dispatch = useDispatch();
  const history = useHistory();

  const selectedTrainOut = useSelector((state) => state.appState.trainOutbound);
  const selectedTrainRet = useSelector((state) => state.appState.trainReturn);
  const totalPrice = useSelector((state) => state.appState.totalPrice);

  const personalData = useSelector((state) => state.personalData);

  const [payOnline, setPayOnline] = useState(personalData.payOnline);
  const [payCash, setPayCash] = useState(personalData.payCash);

  useEffect(() => {
    dispatch(stateSetPayOnline(payOnline));
    dispatch(stateSetPayCash(payCash));
  }, [dispatch, payOnline, payCash]);

  const buyTickets = () => {
    if (
      personalData.surname &&
      personalData.name &&
      personalData.patr &&
      personalData.phone &&
      personalData.email
    ) {
      dispatch(appStateSetProgress(3));
      history.push("./confirm");
    }
  };

  return (
    <div className="payPage__body">
      <Header headerType="select" />
      <ProgressBar />
      <div className="payPage__container">
        <div className="payPage__sidebar">
          <div className="payPage__sidebarTitle">Детали поездки</div>
          <div className="payPage__sidebarMiddle">
            <TripDetails
              icon={forward}
              title="Туда"
              data={selectedTrainOut}
              direction="forward"
            />
            {selectedTrainRet && (
              <TripDetails
                icon={back}
                title="Обратно"
                data={selectedTrainRet}
              />
            )}
            <PassengersDetails />
          </div>
          <div className="payPage__sidebarResult">
            Итог <span>{totalPrice}</span> <img src={rub} alt="rub" />
          </div>
        </div>

        <div className="payPage__main">
          <div className="payPage__mainInfo">
            <div className="payPage__mainInfoHeader">Персональные данные</div>
            <div className="payPage__mainInfoBody">
              <PersonalData />
            </div>
            <div className="payPage__payInfoHeader">Способ оплаты</div>
            <div className="payPage__payInfoBody">
              <Checkbox
                className={`payInfoBody__checkbox ${payOnline ? "active" : ""}`}
                onChange={() => setPayOnline(!payOnline)}
                checked={payOnline}
              >
                Онлайн
              </Checkbox>
              <div className="payInfoBody__options">
                <div className="payInfoBody__option">Банковской картой</div>
                <div className="payInfoBody__option">PayPal</div>
                <div className="payInfoBody__option">Visa QIWI Wallet</div>
              </div>
              <Checkbox
                className={`payPage__payInfoCheckbox ${
                  payCash ? "active" : ""
                }`}
                onChange={() => setPayCash(!payCash)}
                checked={payCash}
              >
                Наличными
              </Checkbox>
            </div>
          </div>
          <button className="payPage__mainButton" onClick={buyTickets}>
            Купить билеты
          </button>
        </div>
      </div>
    </div>
  );
});

export default PayPage;
