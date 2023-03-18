import { createSlice } from "@reduxjs/toolkit";

export interface AuthState {
  isLoggedIn: boolean;
  name: string;
}

const initialState: AuthState = {
  isLoggedIn: false,
  name: "",
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logInOrOut: (state, action) => {
      state.isLoggedIn = !state.isLoggedIn;
      state.name = state.isLoggedIn ? action.payload : "";
    },
  },
});

export const { logInOrOut } = authSlice.actions;
export default authSlice.reducer;
