import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "idle",
  error: "",
  items: [],
};

export const fetchTrainSeatsData = createAsyncThunk(
  "trainSeats/FetchingData",
  async (trainId) => {
    const reqURL = `${process.env.REACT_APP_BASE_URL}routes/${trainId}/seats`;
    const response = await fetch(reqURL);
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    return response.json();
  }
);

const trainSeats = createSlice({
  name: "trainSeats",
  initialState,
  reducers: {
    trainSeatsSet: (state, action) => {
      state.items = action.payload;
    },
    trainSeatsReset: (state) => {
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTrainSeatsData.pending, (state) => {
      state.status = "pending";
      state.error = "";
    });
    builder.addCase(fetchTrainSeatsData.fulfilled, (state, action) => {
      state.items = [...action.payload];
      state.status = "success";
    });
    builder.addCase(fetchTrainSeatsData.rejected, (state, action) => {
      state.status = "error";
      state.error = String(action.error.message);
    });
  },
});

export const { trainSeatsSet, trainSeatsReset } = trainSeats.actions;
export default trainSeats.reducer;
