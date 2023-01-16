import { createSlice } from "@reduxjs/toolkit";

const wizardSlice = createSlice({
  name: "wizard",
  initialState: {
    viewWizard: false,
  },
  reducers: {
    setViewWizard: (state, action) => {
      state.viewWizard = action.payload;
    },
  },
});

export const { setViewWizard } = wizardSlice.actions;
export default wizardSlice.reducer;
