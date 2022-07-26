import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  surname: "",
  name: "",
  patr: "",
  phone: "",
  email: "",
  payOnline: false,
  payCash: false,
};

export const personalData = createSlice({
  name: "personalData",
  initialState,
  reducers: {
    setPersonalSurname: (state, action) => {
      state.surname = action.payload;
    },
    setPersonalName: (state, action) => {
      state.name = action.payload;
    },
    setPersonalPatr: (state, action) => {
      state.patr = action.payload;
    },
    setPersonalPhone: (state, action) => {
      state.phone = action.payload;
    },
    setPersonalEmail: (state, action) => {
      state.email = action.payload;
    },
    stateSetPayOnline: (state, action) => {
      state.payOnline = action.payload;
    },
    stateSetPayCash: (state, action) => {
      state.payCash = action.payload;
    },
    resetPersonalInitials: (state) => {
      return initialState;
    },
  },
});

export const {
  setPersonalSurname,
  setPersonalName,
  setPersonalPatr,
  setPersonalPhone,
  setPersonalEmail,
  stateSetPayOnline,
  stateSetPayCash,
  resetPersonalInitials,
} = personalData.actions;
export default personalData.reducer;
