import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  status: "idle",
  error: "",
  data: {
    _id: 0,
    name: "",
    class_type: "",
    have_first_class: false,
    have_second_class: false,
    have_third_class: false,
    have_fourth_class: false,
    have_wifi: false,
    have_air_conditioning: false,
    have_express: false,
    seats: [{ index: 0, available: false }],
  },
};

const fetchTicketsData = createAsyncThunk(
  "getRoutes/FetchingData",
  async (params) => {
    const {
      id,
      have_first_class = false,
      have_second_class = true,
      have_third_class = true,
      have_fourth_class = false,
      have_wifi = false,
      have_air_conditioning = false,
      have_express = false,
    } = params;

    let reqURL = `${process.env.REACT_APP_ROUTES_URL}${id}/seats`;

    // FILTERS
    reqURL += `&have_first_class=${have_first_class}`;
    reqURL += `&have_second_class=${have_second_class}`;
    reqURL += `&have_third_class=${have_third_class}`;
    reqURL += `&have_fourth_class=${have_fourth_class}`;
    reqURL += `&have_wifi=${have_wifi}`;
    reqURL += `&have_air_conditioning=${have_air_conditioning}`;
    reqURL += `&have_express=${have_express}`;

    // eslint-disable-next-line no-console
    console.log(reqURL);

    const response = await fetch(reqURL);
    if (!response.ok) {
      throw new Error(`request error: ${reqURL}`);
    }
    return response.json();
  }
);

const getTickets = createSlice({
  name: "getTickets",
  initialState,
  reducers: {
    getTicketsReset: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTicketsData.pending, (state) => {
      state.status = "pending";
      state.error = "";
    });
    builder.addCase(fetchTicketsData.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = "success";
    });
    builder.addCase(fetchTicketsData.rejected, (state, action) => {
      state.status = "error";
      state.error = String(action.error.message);
    });
  },
});

export const { getTicketsReset } = getTickets.actions;
export default getTickets.reducer;
