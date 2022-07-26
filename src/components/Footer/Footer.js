import "./footer.scss";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input, message, Modal } from "antd";
import PopupInfo from "../Popups/PopupInfo";
import Contact from "./Contact/Contact";
import Social from "./Social/Social";
import btnUp from "./svg/btnUp.svg";
import call from "./svg/call.svg";
import mail from "./svg/mail.svg";
import skype from "./svg/skype.svg";
import geo from "./svg/geo.svg";
import youtube from "./svg/youtube.svg";
import linkedIn from "./svg/linkedIn.svg";
import gPlus from "./svg/gPlus.svg";
import fb from "./svg/fb.svg";
import twitter from "./svg/twitter.svg";
import { fetchSubscribe, setStatusIdle } from "../../store/fetchSubscribe";

export default function Footer() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.subscription.status);
  const [userEmail, setUserEmail] = useState("");
  const [popupActive, setPopupActive] = useState(false);

  useEffect(() => {
    if (status === "pending") {
      message
        .loading({
          content: "loading...",
          key: "pending",
          duration: 0,
        })
        .then();
    }

    if (status === "success" || status === "error") {
      message.destroy("pending");
    }

    if (status === "success") {
      setPopupActive(true);
    }
  }, [status]);

  const onSubscribe = (e) => {
    e.preventDefault();
    dispatch(fetchSubscribe(userEmail));
    setUserEmail("");
  };

  const userOkay = () => {
    setPopupActive(false);
    dispatch(setStatusIdle());
  };

  return (
    <footer className="footer" id="contacts">
      <div className="top">
        <section>
          <div className="footer__title">Свяжитесь с нами</div>
          <ul className="footer__contacts">
            <Contact
              contactIcon={call}
              contactAlt="call"
              contactText="8 (800) 000 00 00"
            />
            <Contact
              contactIcon={mail}
              contactAlt="iconMail"
              contactText="inbox@mail.ru"
            />
            <Contact
              contactIcon={skype}
              contactAlt="iconSkype"
              contactText="tu.train.tickets"
            />
            <Contact
              contactIcon={geo}
              contactAlt="iconGeo"
              contactText="г. Москва, ул. Московская 27-35, 555 555"
            />
          </ul>
        </section>
        <section>
          <div className="footer__title">Подписка</div>
          <div className="footer__subtitle">Будьте в курсе событий</div>
          <form
            className="footer__subscription"
            id="subscription"
            name="subscription"
            onSubmit={(e) => onSubscribe(e)}
          >
            <Input
              type="email"
              name="email"
              inputMode="email"
              placeholder="e-mail"
              className="footer__mailInput"
              value={userEmail}
              required
              onChange={(e) => setUserEmail(e.target.value)}
            />
            <button className="footer__button" htmltype="submit">
              Отправить
            </button>
          </form>
          <div className="footer__title">Подписывайтесь на нас</div>
          <ul className="footer__socials">
            <Social socialIcon={youtube} socialAlt="youtube" />
            <Social socialIcon={linkedIn} socialAlt="linkedIn" />
            <Social socialIcon={gPlus} socialAlt="gPlus" />
            <Social socialIcon={fb} socialAlt="fb" />
            <Social socialIcon={twitter} socialAlt="twitter" />
          </ul>
        </section>
      </div>
      <div className="footer__bottom">
        <div className="logo">Лого</div>
        <button
          shape="circle"
          className="btnUp"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
        >
          <img src={btnUp} alt={btnUp} />
        </button>
        <span>2018 Web</span>
      </div>

      {popupActive && (
        <Modal
          closable={false}
          centered
          footer={null}
          visible={popupActive}
          bodyStyle={{
            height: "418px",
            width: "666px",
            background: "#FBFBFB",
            border: "1px solid #C4C4C4",
            boxShadow: "0 2px 2px rgba(0, 0, 0, 0.25)",
            padding: "0",
          }}
        >
          <PopupInfo
            message={"Вы успешно подписались на нашу рассылку!"}
            action={userOkay}
          />
        </Modal>
      )}
    </footer>
  );
}
