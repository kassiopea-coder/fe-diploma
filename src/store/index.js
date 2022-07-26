import { configureStore } from "@reduxjs/toolkit";
import appState from "./appState";
import params from "./params";
import getRoutes from "./fetchRoutes";
import lastTickets from "./fetchLastTickets";
import getTickets from "./fetchTickets";
import trainSeats from "./fetchSeats";
import subscription from "./fetchSubscribe";
import passengersData from "./passengersData";
import personalData from "./personalData";

const store = configureStore({
  reducer: {
    appState,
    params,
    getRoutes,
    lastTickets,
    getTickets,
    trainSeats,
    subscription,
    passengersData,
    personalData,
  },
});

export default store;
