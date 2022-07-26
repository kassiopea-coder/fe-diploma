import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "",
  error: "",
  response: {
    status: false,
  },
};

export const fetchSubscribe = (userEmail) => async (dispatch, getState) => {
  dispatch(fetchStart());
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}subscribe?email=${userEmail}`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userEmail),
      }
    );
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    dispatch(fetchSuccess(data));
  } catch (e) {
    dispatch(fetchError(e.message));
  }
};

const subscription = createSlice({
  name: "subscription",
  initialState,
  reducers: {
    setStatusIdle(state, action) {
      state.status = "idle";
    },
    fetchStart(state, action) {
      state.status = "pending";
    },
    fetchError(state, action) {
      state.status = "error";
      state.error = String(action.payload.error.message);
    },
    fetchSuccess(state, action) {
      state.status = "success";
      state.response = action.payload;
    },
  },
});

export const { fetchStart, fetchError, fetchSuccess, setStatusIdle } =
  subscription.actions;
export default subscription.reducer;
