import { configureStore } from "@reduxjs/toolkit";
import hospitalReducer from "./slice/hospitalSlice";


export const store = configureStore({
 reducer:{
  hospital: hospitalReducer,
 }
});
