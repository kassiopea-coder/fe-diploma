import "./lastTickets.css";
import LastTicketsCard from "./LastTicketsCard/LastTicketsCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchLastTickets } from "../../../store/fetchLastTickets";

export default function LastTickets() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.lastTickets.items);

  useEffect(() => {
    dispatch(fetchLastTickets());
  }, [dispatch]);

  return (
    <div className="lastTickets__container">
      <h3 className="lastTickets__title">Последние билеты</h3>
      <div className="lastTickets__block">
        {items.slice(0, 3).map((el) => (
          <LastTicketsCard
            key={el.departure._id}
            haveWifi={el.have_wifi}
            isExpress={el.is_express}
            airCond={el.have_air_conditioning}
            minPrice={el.min_price}
            departureFromCity={el.departure.from.city.name}
            departureFromStation={el.departure.from.railway_station_name}
            departureToCity={el.departure.to.city.name}
            departureToStation={el.departure.to.railway_station_name}
          />
        ))}
      </div>
    </div>
  );
}
