import { memo } from "react";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import "./passengerCollapse.css";
import { Collapse, Select, Input, Checkbox } from "antd";
import { ReactComponent as Plus } from "../../img/add_plus_bordered.svg";
import { ReactComponent as Minus } from "../../img/add_minus.svg";
import { ReactComponent as Close } from "../../img/add_close.svg";
import done from "../../img/done.png";
import error from "../../img/error.png";
import {
  addPassenger,
  incCounter,
  deletePassenger,
} from "../../store/passengersData";

const { Panel } = Collapse;
const { Option } = Select;

const PassengerCollapse = memo(({ passengerNumber, passenger }) => {
  const dispatch = useDispatch();

  // сохранение данных при возврате назад
  const isAge = () => {
    if (passenger) {
      return passenger.age;
    }
  };

  const isSurname = () => {
    if (passenger) {
      return passenger.surname;
    }
  };

  const isName = () => {
    if (passenger) {
      return passenger.name;
    }
  };

  const isPatr = () => {
    if (passenger) {
      return passenger.patr;
    }
  };

  const isSex = () => {
    if (passenger) {
      return passenger.sex;
    }
  };

  const isBd = () => {
    if (passenger) {
      return passenger.bd;
    }
  };

  const isDysmobility = () => {
    if (passenger) {
      return passenger.dysmobility;
    }
  };

  const isDocument = () => {
    if (passenger) {
      return passenger.document;
    }
  };

  const isPassportSeria = () => {
    if (passenger) {
      return passenger.passport.seria;
    }
  };

  const isPassportNumber = () => {
    if (passenger) {
      return passenger.passport.number;
    }
  };

  const isBdCertif = () => {
    if (passenger) {
      return passenger.bdCertif;
    }
  };

  const [age, setUserAge] = useState(isAge() || "Взрослый");
  const [surname, setUserSurname] = useState(isSurname() || "");
  const [name, setUserName] = useState(isName() || "");
  const [patr, setUserPatr] = useState(isPatr() || "");
  const [sex, setUserSex] = useState(isSex() || "");
  const [bd, setUserBd] = useState(isBd() || "");
  const [dysmobility, setUserDysmobility] = useState(isDysmobility() || false);
  const [document, setUserDocument] = useState(isDocument() || "Паспорт РФ");
  const [passportSeria, setUserPassportSeria] = useState(
    isPassportSeria() || ""
  );
  const [passportNumber, setUserPassportNumber] = useState(
    isPassportNumber() || ""
  );
  const [bdCertif, setUserBdCertif] = useState(isBdCertif() || "");
  const [bdCertifError, setBdCertifError] = useState(false);

  const isDone =
    age &&
    surname &&
    name &&
    patr &&
    sex &&
    bd &&
    document &&
    ((passportSeria.length === 4 && passportNumber.length === 6) ||
      bdCertif.length === 12);

  const onDeletePassenger = (e) => {
    const deleteButton = e.currentTarget;
    const idx = Number(deleteButton.getAttribute("data-id"));
    dispatch(deletePassenger(idx));
  };

  const uploadPassengerData = (e) => {
    if (isDone) {
      dispatch(
        addPassenger({
          id: passengerNumber,
          age: age,
          surname: surname,
          name: name,
          patr: patr,
          sex: sex,
          bd: bd,
          dysmobility: dysmobility,
          document: document,
          passport: { seria: passportSeria, number: passportNumber },
          bdCertif: bdCertif,
        })
      );
      let newCounter = passengerNumber + 1;
      dispatch(incCounter(newCounter));

      const doneButton = e.target;
      doneButton.setAttribute("disabled", "disabled");
    } else if (
      document === "Свидетельство о рождении" &&
      bdCertif.length < 12
    ) {
      setBdCertifError(true);
    }
  };

  useEffect(() => {
    if (document === "Свидетельство о рождении" && bdCertif.length === 12) {
      setBdCertifError(false);
    }
  }, [document, bdCertif.length, bdCertifError]);

  return (
    <div className="passengersPage__collapse">
      <Collapse
        ghost
        expandIconPosition="left"
        expandIcon={({ isActive }) => (isActive ? <Minus /> : <Plus />)}
      >
        <Panel
          header={
            <div className="passenger-full__header">
              <div className="passenger__title">
                Пассажир <span>{passengerNumber}</span>
              </div>
              <div className="passenger__close">
                <button
                  className="passenger__closeButton"
                  onClick={onDeletePassenger}
                  data-id={passengerNumber}
                >
                  <Close />
                </button>
              </div>
            </div>
          }
          key={1}
        >
          <div className="passengersPage__passenger-full">
            <div className="passenger-full__content">
              <div className="passenger-full__selectAge">
                <Select
                  className="selectAge__container"
                  dropdownClassName={("selectAge__dropdown", "selectAge")}
                  defaultValue={age}
                  allowClear={false}
                  onChange={(value) => setUserAge(value)}
                >
                  <Option value="Взрослый">Взрослый</Option>
                  <Option value="Детский">Детский</Option>
                </Select>
              </div>
              <div className="passenger__initials">
                <div className="passengerInitials__block">
                  <div className="passengerInput__title">Фамилия</div>
                  <Input
                    className="passengerInitials__input"
                    placeholder="Иванов"
                    value={surname}
                    required
                    onChange={(e) => setUserSurname(e.target.value)}
                  />
                </div>
                <div className="passengerInitials__block">
                  <div className="passengerInput__title">Имя</div>
                  <Input
                    className="passengerInitials__input"
                    placeholder="Иван"
                    value={name}
                    required
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>
                <div className="passengerInitials__block">
                  <div className="passengerInput__title">Отчество</div>
                  <Input
                    className="passengerInitials__input"
                    placeholder="Иванович"
                    value={patr}
                    required
                    onChange={(e) => setUserPatr(e.target.value)}
                  />
                </div>
              </div>
              <div className="passenger__sex_bd">
                <div className="passenger__sex">
                  <div className="passengerInput__title">Пол</div>
                  <div className="passengerSex__buttons">
                    <button
                      className={
                        sex === "Мужской"
                          ? "passengerSex__button male sexButtonActive"
                          : "passengerSex__button male"
                      }
                      onClick={() => setUserSex("Мужской")}
                    >
                      М
                    </button>
                    <button
                      className={
                        sex === "Женский"
                          ? "passengerSex__button female sexButtonActive"
                          : "passengerSex__button female"
                      }
                      onClick={() => setUserSex("Женский")}
                    >
                      Ж
                    </button>
                  </div>
                </div>
                <div className="passenger__bd">
                  <div className="passengerInput__title">Дата рождения</div>
                  <Input
                    placeholder="17.02.1985"
                    className="passengerBd__input"
                    value={bd}
                    required
                    onChange={(e) => setUserBd(e.target.value)}
                  />
                </div>
              </div>
              <div className="passengerCheckbox__block">
                <Checkbox
                  className="passengerCheckbox__title"
                  onChange={() => setUserDysmobility(!dysmobility)}
                  checked={dysmobility}
                >
                  ограниченная подвижность
                </Checkbox>
              </div>
            </div>
            <div className="passenger__passportData">
              <div className="passportData__block">
                <div className="passengerInput__title">Тип документа</div>
                <Select
                  defaultValue="Паспорт РФ"
                  allowClear={false}
                  onChange={(value) => setUserDocument(value)}
                >
                  <Option value="Паспорт РФ">Паспорт РФ</Option>
                  <Option value="Свидетельство о рождении">
                    Свидетельство о рождении
                  </Option>
                </Select>
              </div>
              {document === "Паспорт РФ" ? (
                <>
                  <div className="passportData__block">
                    <div className="passengerInput__title">Серия</div>
                    <Input
                      placeholder="__ __ __ __"
                      className="passport__input"
                      value={passportSeria}
                      required
                      onChange={(e) => setUserPassportSeria(e.target.value)}
                    />
                  </div>
                  <div className="passportData__block">
                    <div className="passengerInput__title">Номер</div>
                    <Input
                      placeholder="__ __ __ __ __ __"
                      className="passport__input"
                      value={passportNumber}
                      required
                      onChange={(e) => setUserPassportNumber(e.target.value)}
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="passportData__block">
                    <div className="passengerInput__title">Номер</div>
                    <Input
                      placeholder="VIII УН 256319"
                      className="passport__input"
                      value={bdCertif}
                      required
                      onChange={(e) => setUserBdCertif(e.target.value)}
                    />
                  </div>
                </>
              )}
            </div>
            {!isDone && bdCertifError === false && (
              <div className="passenger__next">
                <button
                  className="passengerNext__button"
                  onClick={uploadPassengerData}
                >
                  Следующий пассажир
                </button>
              </div>
            )}
            {isDone && bdCertifError === false && (
              <div className="passenger__nextDone">
                <div className="nextDone__text">
                  <img src={done} alt="done" />
                  Готово
                </div>
                <button
                  className="passengerNext__button"
                  onClick={uploadPassengerData}
                >
                  Готово
                </button>
              </div>
            )}
            {bdCertifError === true && (
              <div className="passenger__nextError">
                <div className="nextError__text">
                  <div className="nextError__img">
                    <img src={error} alt="error" />
                  </div>
                  <div>
                    Номер свидетельства о рождении указан некорректно. <br />{" "}
                    Пример: <span>VIII УН 256319</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </Panel>
      </Collapse>
    </div>
  );
});

export default PassengerCollapse;
