import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import moment from "moment";

const initialState = {
  status: "idle",
  error: "",
  data: {
    totalCount: 0,
    items: [],
  },
};

const subtractYY = (str) =>
  moment(str, "YYYY-MM-DD").subtract(1, "years").format("YYYY-MM-DD");

export const fetchRoutes = createAsyncThunk(
  "getRoutes/FetchingData",
  async (params) => {
    const {
      cityDeparture: { _id: departureId },
      cityArrival: { _id: arrivalId },
      dateOutbound,
      dateReturn,
      limit,
      sort,
      offset,
      filters: {
        have_first_class = false,
        have_second_class = false,
        have_third_class = false,
        have_fourth_class = false,
        have_wifi = false,
        is_express = false,
        price_from,
        price_to,
        start_departure_hour_from = 0,
        start_departure_hour_to = 0,
        start_arrival_hour_from = 0,
        start_arrival_hour_to = 0,
        end_departure_hour_from = 0,
        end_departure_hour_to = 0,
        end_arrival_hour_from = 0,
        end_arrival_hour_to = 0,
      },
    } = params;

    if (!departureId || !arrivalId) {
      throw new Error(`empty points`);
    }

    let reqURL = `${process.env.REACT_APP_BASE_URL}routes?from_city_id=${departureId}&to_city_id=${arrivalId}&limit=${limit}&sort=${sort}`;

    if (dateOutbound) {
      // temporary reduce YY by one
      reqURL += `&date_start=${subtractYY(dateOutbound)}`;
      if (start_departure_hour_from) {
        reqURL += `&start_departure_hour_from=${start_departure_hour_from}`;
      }
      if (start_departure_hour_to) {
        reqURL += `&start_departure_hour_to=${start_departure_hour_to}`;
      }
      if (start_arrival_hour_from) {
        reqURL += `&start_arrival_hour_from=${start_arrival_hour_from}`;
      }
      if (start_arrival_hour_to) {
        reqURL += `&start_arrival_hour_to=${start_arrival_hour_to}`;
      }
      if (dateReturn) {
        // temporary reduce YY by one
        reqURL += `&date_end=${subtractYY(dateReturn)}`;
        if (end_departure_hour_from) {
          reqURL += `&end_departure_hour_from=${end_departure_hour_from}`;
        }
        if (end_departure_hour_to) {
          reqURL += `&end_departure_hour_to=${end_departure_hour_to}`;
        }
        if (end_arrival_hour_from) {
          reqURL += `&end_arrival_hour_from=${end_arrival_hour_from}`;
        }
        if (end_arrival_hour_to) {
          reqURL += `&end_arrival_hour_to=${end_arrival_hour_to}`;
        }
      }
    }

    if (offset) {
      reqURL += `&offset=${offset}`;
    }

    // FILTERS
    reqURL += `&have_first_class=${have_first_class}`;
    reqURL += `&have_second_class=${have_second_class}`;
    reqURL += `&have_third_class=${have_third_class}`;
    reqURL += `&have_fourth_class=${have_fourth_class}`;
    reqURL += `&have_wifi=${have_wifi}`;
    reqURL += `&is_express=${is_express}`;

    if (price_from) {
      reqURL += `&price_from=${price_from}`;
    }
    if (price_to) {
      reqURL += `&price_to=${price_to}`;
    }

    const response = await fetch(reqURL);
    if (!response.ok) {
      throw new Error(`request error: ${reqURL}`);
    }
    const data = await response.json();
    return data;
  }
);

const getRoutes = createSlice({
  name: "getRoutes",
  initialState,
  reducers: {
    getRouteSet(state, action) {
      state.data.items = action.payload;
    },
    getRouteReset(state, action) {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRoutes.pending, (state) => {
      state.status = "pending";
      state.error = "";
    });
    builder.addCase(fetchRoutes.fulfilled, (state, action) => {
      state.data.totalCount = action.payload.total_count;
      state.data.items = [...action.payload.items].map((el) => [el, el]);
      state.status = "success";
    });
    builder.addCase(fetchRoutes.rejected, (state, action) => {
      state.status = "error";
      state.error = String(action.error.message);
    });
  },
});

export const { getRouteSet, getRouteReset } = getRoutes.actions;
export default getRoutes.reducer;
