import "./payment.css";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { memo } from "react";
import { appStateSetProgress } from "../../store/appState";

const Payment = memo(() => {
  const history = useHistory();
  const dispatch = useDispatch();

  const payOnline = useSelector((state) => state.personalData.payOnline);
  const payCash = useSelector((state) => state.personalData.payCash);

  const changePayMethod = () => {
    dispatch(appStateSetProgress(2));
    history.push("./pay");
  };

  return (
    <div className="pay__way">
      <p>
        {payOnline && "Онлайн"} {payCash && "Наличными"}
      </p>
      <div>
        <button onClick={changePayMethod}>Изменить</button>
      </div>
    </div>
  );
});

export default Payment;
