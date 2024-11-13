import { configureStore } from "@reduxjs/toolkit";
import React from "react";
import counterReducer from "./Counterslice";
const Store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default Store;
