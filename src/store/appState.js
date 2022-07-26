import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  progress: 0,
  trainOutbound: undefined,
  trainReturn: undefined,
  totalPrice: 0,
  adultCount: 0,
  childrenCount: 0,
  toddlerCount: 0,
  selectedSeats: [],
};

export const appState = createSlice({
  name: "appState",
  initialState,
  reducers: {
    appStateSetProgress: (state, action) => {
      state.progress = action.payload;
    },
    appStateSetTrainOutbound: (state, action) => {
      state.trainOutbound = action.payload;
    },
    appStateResetTrainOutbound: (state) => {
      state.trainOutbound = undefined;
    },
    appStateSetTrainReturn: (state, action) => {
      state.trainReturn = action.payload;
    },
    appStateResetTrainReturn: (state) => {
      state.trainReturn = undefined;
    },
    appStateSetTotalPrice: (state, action) => {
      state.totalPrice = action.payload;
    },
    appStateSetAdultCount: (state, action) => {
      state.adultCount = action.payload;
    },
    appStateSetChildrenCount: (state, action) => {
      state.childrenCount = action.payload;
    },
    appStateSetToddlerCount: (state, action) => {
      state.toddlerCount = action.payload;
    },
    appStateSetSelectedSeats: (state, action) => {
      state.selectedSeats = [...action.payload];
    },
  },
});

export const {
  appStateSetProgress,
  appStateSetTrainOutbound,
  appStateResetTrainOutbound,
  appStateSetTrainReturn,
  appStateResetTrainReturn,
  appStateSetTotalPrice,
  appStateSetAdultCount,
  appStateSetChildrenCount,
  appStateSetToddlerCount,
  appStateSetSelectedSeats,
} = appState.actions;
export default appState.reducer;
