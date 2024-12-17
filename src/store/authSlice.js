import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  UserName: false,
};

const userNameSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserName: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { setUserName } = userNameSlice.actions;
export default userNameSlice.reducer;
