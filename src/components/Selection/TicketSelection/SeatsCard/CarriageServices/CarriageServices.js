import { memo, useRef, useCallback, useEffect } from "react";
import { message, Tooltip } from "antd";

import ac_icon from "../../../../../img/service_ac.svg";
import wifi_icon from "../../../../../img/service_wifi.svg";
import linen from "../../../../../img/service_linen_bordered.svg";
import rub from "../../../../../img/rub.png";

import "./carriageServices.css";

const CarriageServices = memo(
  ({ data, selectedServices, setSelectedServices, selectedSeats }) => {
    const {
      have_air_conditioning: ac,
      have_wifi: wifi,
      wifi_price: wifiPrice,
      is_linens_included: linensInc,
      linens_price: linenPrice,
      _id: coachId,
    } = data.coach;
    const wifiElement = useRef(null);
    const linenElement = useRef(null);

    const activeCarriageSelectedServices = selectedServices.find(
      (el) => el.coachId === coachId
    );
    const hasSelectedSeats = selectedSeats.some((el) => el.coachId === coachId);

    const wifiSelected = activeCarriageSelectedServices
      ? activeCarriageSelectedServices.wifi.isSelected
      : false;
    const linenSelected = activeCarriageSelectedServices
      ? activeCarriageSelectedServices.linen.isSelected
      : false;

    const clearServices = useCallback(() => {
      const servicesObj = {
        coachId,
        wifi: { isSelected: false, price: 0 },
        linen: { isSelected: false, price: 0 },
      };
      const existId = selectedServices.findIndex(
        (el) => el.coachId === coachId
      );
      if (existId === -1) {
        selectedServices.push(servicesObj);
      } else {
        selectedServices.splice(existId, 1, servicesObj);
      }
      setSelectedServices(selectedServices);
    }, [coachId, selectedServices, setSelectedServices]);

    useEffect(() => {
      if (!hasSelectedSeats) {
        clearServices();
      }
    }, [clearServices, hasSelectedSeats]);

    const toggleService = (service) => {
      if (!hasSelectedSeats) {
        const warning = () => {
          message.warning("Сначала выберите места.").then();
        };
        warning();
      }
      if (hasSelectedSeats) {
        const newArr = [...selectedServices];
        let servicesObj = {
          coachId,
          wifi: {
            isSelected: wifiSelected,
            price: wifiSelected ? wifiPrice : 0,
          },
          linen: {
            isSelected: linenSelected,
            price: linenSelected ? linenPrice : 0,
          },
        };

        if (service === "wifi") {
          servicesObj = {
            ...servicesObj,
            wifi: {
              isSelected: !wifiSelected,
              price: wifiSelected ? 0 : wifiPrice,
            },
          };
        }
        if (service === "linen") {
          servicesObj = {
            ...servicesObj,
            linen: {
              isSelected: !linenSelected,
              price: linenSelected ? 0 : linenPrice,
            },
          };
        }
        const existId = selectedServices.findIndex(
          (el) => el.coachId === coachId
        );
        if (existId === -1) {
          newArr.push(servicesObj);
        } else {
          newArr.splice(existId, 1, servicesObj);
        }
        setSelectedServices(newArr);
      }
    };

    const tooltipWifi = (
      <div className="tooltip_inside">
        <div className="tooltip_inside_content">
          Стоимость Wi-Fi: {wifiPrice}
        </div>
        <div className="tooltip_inside_moneySymbol">
          <img src={rub} alt="rub" />
        </div>
      </div>
    );

    const tooltipLinen = (
      <div className="tooltip_inside">
        <div className="tooltip_inside_content">
          Стоимость белья: {linenPrice}{" "}
        </div>
        <div className="tooltip_inside_moneySymbol">
          <img src={rub} alt="rub" />
        </div>
      </div>
    );

    return (
      <div className="seatsInfo__block">
        <div className="seatsInfo__title">
          Обслуживание <span>ФПК</span>
        </div>
        <div className="seatsInfo__services">
          <div className="seatsInfo__icon">
            {ac && (
              <button type="button" disabled>
                <img src={ac_icon} alt="icon" />
              </button>
            )}
          </div>
          <div className="seatsInfo__icon">
            {wifi && (
              <Tooltip
                placement="bottom"
                title={tooltipWifi}
                mouseEnterDelay={0.3}
                mouseLeaveDelay={0.3}
                trigger="hover"
                getPopupContainer={() => wifiElement.current}
                overlayClassName="seatsInfo__services-tooltip"
                destroyTooltipOnHide
              >
                <button
                  type="button"
                  className={wifiSelected ? "selected" : ""}
                  ref={wifiElement}
                  onClick={() => toggleService("wifi")}
                >
                  {wifi && <img src={wifi_icon} alt="icon" />}
                </button>
              </Tooltip>
            )}
          </div>
          <div className="seatsInfo__icon">
            {linensInc ? (
              <button type="button" disabled>
                <img src={linen} alt="icon" />
              </button>
            ) : (
              <Tooltip
                placement="bottom"
                title={tooltipLinen}
                mouseEnterDelay={0.3}
                mouseLeaveDelay={0.3}
                trigger="hover"
                getPopupContainer={() => linenElement.current}
                overlayClassName="seatsInfo__services-tooltip"
                destroyTooltipOnHide
              >
                <button
                  type="button"
                  className={linenSelected ? "selected" : ""}
                  ref={linenElement}
                  onClick={() => toggleService("linen")}
                >
                  <img src={linen} alt="icon" />
                </button>
              </Tooltip>
            )}
          </div>
        </div>
      </div>
    );
  }
);

export default CarriageServices;
