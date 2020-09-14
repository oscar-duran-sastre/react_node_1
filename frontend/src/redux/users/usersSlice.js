import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    isLoading: false,
    list: [],
  },
  reducers: {
    findStarted: (state) => {
      return { ...state, isLoading: true };
    },
    findSuccess: (state, action) => {
      state.list = action.payload;
      state.isLoading = false;
    },
  },
});

const { findStarted, findSuccess } = usersSlice.actions;

const selectIsLoading = (state) => state.users.isLoading;
const selectUsersList = (state) => state.users.list;

export default usersSlice.reducer;
export { usersSlice, findStarted, findSuccess, selectIsLoading, selectUsersList };
