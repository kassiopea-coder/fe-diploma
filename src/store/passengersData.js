import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  counter: [1],
};

export const passengersData = createSlice({
  name: "passengersData",
  initialState,
  reducers: {
    addPassenger: (state, action) => {
      state.items.push(action.payload);
    },
    incCounter: (state, action) => {
      state.counter.push(action.payload);
    },

    deletePassenger: (state, action) => {
      state.items = state.items.filter((el) => el !== action.payload);
      state.counter = state.counter.filter((el) => el !== action.payload);
    },
    resetPassengerData: (state) => {
      return initialState;
    },
  },
});

export const { addPassenger, incCounter, deletePassenger } =
  passengersData.actions;
export default passengersData.reducer;
