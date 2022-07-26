import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cityDeparture: { _id: 0, value: "" },
  cityArrival: { _id: 0, value: "" },
  dateOutbound: null,
  dateReturn: null,
  filters: {
    have_first_class: true,
    have_second_class: true,
    have_third_class: true,
    have_fourth_class: false,
    have_wifi: true,
    is_express: false,
    price_from: 0,
    price_to: 10000,
  },
  limit: 5,
  sort: "date",
  offset: 0,
};

export const params = createSlice({
  name: "params",
  initialState,
  reducers: {
    searchParamsReset: () => initialState,
    searchParamsCityDepartureSet: (state, action) => ({
      ...state,
      cityDeparture: action.payload,
    }),
    searchParamsCityDepartureClear: (state) => ({
      ...state,
      cityDeparture: initialState.cityDeparture,
    }),
    searchParamsCityArrivalSet: (state, action) => ({
      ...state,
      cityArrival: action.payload,
    }),
    searchParamsCityArrivalClear: (state) => ({
      ...state,
      cityArrival: initialState.cityArrival,
    }),
    searchParamsDateOutboundSet: (state, action) => ({
      ...state,
      dateOutbound: action.payload,
    }),
    searchParamsDateOutboundClear: (state) => ({
      ...state,
      dateOutbound: null,
    }),
    searchParamsDateReturnSet: (state, action) => ({
      ...state,
      dateReturn: action.payload,
    }),
    searchParamsDateReturnClear: (state) => ({ ...state, dateReturn: null }),
    searchParamsFiltersSet: (state, action) => ({
      ...state,
      filters: { ...state.filters, ...action.payload },
    }),
    searchParamsFiltersClear: (state) => ({
      ...state,
      filters: initialState.filters,
    }),
    searchParamsLimitSet: (state, action) => ({
      ...state,
      limit: action.payload,
    }),
    searchParamsSortSet: (state, action) => ({
      ...state,
      sort: action.payload,
    }),
    searchParamsOffsetSet: (state, action) => ({
      ...state,
      offset: action.payload,
    }),
  },
});

export const {
  searchParamsReset,
  searchParamsCityDepartureSet,
  searchParamsCityDepartureClear,
  searchParamsCityArrivalSet,
  searchParamsCityArrivalClear,
  searchParamsDateOutboundSet,
  searchParamsDateOutboundClear,
  searchParamsDateReturnSet,
  searchParamsDateReturnClear,
  searchParamsFiltersSet,
  searchParamsFiltersClear,
  searchParamsLimitSet,
  searchParamsSortSet,
  searchParamsOffsetSet,
} = params.actions;

export default params.reducer;
