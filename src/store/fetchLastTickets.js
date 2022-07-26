import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  loading: false,
  error: null,
  status: "idle",
};

export const fetchLastTickets = () => async (dispatch, getState) => {
  dispatch(fetchStart());
  try {
    const response = await fetch(process.env.REACT_APP_LAST_TICKETS_URL);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    dispatch(put(data));
    dispatch(fetchSuccess());
  } catch (e) {
    dispatch(fetchError(e.message));
  }
};

const lastTickets = createSlice({
  name: "lastTickets",
  initialState,
  reducers: {
    put(state, action) {
      state.items = action.payload;
    },
    clean(state, action) {
      state.items = [];
    },
    fetchStart(state, action) {
      return {
        ...state,
        items: [],
        loading: true,
        error: null,
        status: "pending",
      };
    },
    fetchError(state, action) {
      const { error } = action.payload;
      return { ...state, items: [], loading: false, error, status: "error" };
    },
    fetchSuccess(state, action) {
      return { ...state, loading: false, error: null, status: "success" };
    },
  },
});

export const { put, clean, fetchStart, fetchError, fetchSuccess } =
  lastTickets.actions;
export default lastTickets.reducer;
