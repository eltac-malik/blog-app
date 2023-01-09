import { configureStore } from "@reduxjs/toolkit";

import wizardViewReducer from "./wizardSlice";

export const store = configureStore({
  reducer: {
    wizard: wizardViewReducer
  }
});
