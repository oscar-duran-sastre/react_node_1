import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    isLoading: false,
    session: [],
  },
  reducers: {
    findStarted: (state) => {
      return { ...state, isLoading: true };
    },
    findSuccess: (state, action) => {
      state.session = action.payload;
      state.isLoading = false;
    },
  },
});

const { findStarted, findSuccess } = loginSlice.actions;

const selectIsLoading = (state) => state.users.isLoading;
const selectUserSession = (state) => state.users.session;

export default loginSlice.reducer;
export { loginSlice, findStarted, findSuccess, selectIsLoading, selectUserSession };
