import { memo } from "react";
import "./ticketServices.css";
import wifi from "../img/service_wifi_active.svg";
import wifi_inact from "../img/wifi.png";
import express from "../img/service_express_active.svg";
import express_inact from "../img/express.png";
import ac from "../img/service_ac_active.svg";
import ac_inact from "../img/service_ac_inactive.svg";

const TicketServices = memo(({ services }) => {
  const { have_wifi, is_express, have_air_conditioning } = services;

  return (
    <div className="seats__options">
      {have_wifi ? (
        <div className="seatsOptions__icon">
          <img src={wifi} alt="wifi" />
        </div>
      ) : (
        <div className="seatsOptions__icon">
          <img src={wifi_inact} alt="wifi" />
        </div>
      )}

      {is_express ? (
        <div className="seatsOptions__icon">
          <img src={express} alt="express" />
        </div>
      ) : (
        <div className="seatsOptions__icon">
          <img src={express_inact} alt="express" />
        </div>
      )}
      {have_air_conditioning ? (
        <div className="seatsOptions__icon">
          <img src={ac} alt="ac" />
        </div>
      ) : (
        <div className="seatsOptions__icon">
          <img src={ac_inact} alt="ac" />
        </div>
      )}
    </div>
  );
});

export default TicketServices;
