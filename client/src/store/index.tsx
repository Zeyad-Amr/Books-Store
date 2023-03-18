import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import books from "./bookSlice";
import auth from "./authSlice";
export const store = configureStore({
  reducer: {
    books,
    auth,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
