import { createSlice } from "@reduxjs/toolkit";

const UserDetailsSlice = createSlice({
  name: "userDetails",
  initialState: {
    personalInfo: {},
    currentStep: 1,
    userPlan: {},
    addOns: [],
  },
  reducers: {
    setPersonalInfo: (state, action) => {
      state.personalInfo = action.payload;
    },
    incrementStep: (state) => {
      state.currentStep++;
    },
    decrementStep: (state) => {
      state.currentStep--;
    },
    setCurrentStep: (state, action) => {
      state.currentStep = action.payload;
    },
    setUserPlan: (state, action) => {
      state.userPlan = action.payload;
    },
    setUserAddOns: (state, action) => {
      state.addOns = action.payload;
    },
  },
});

export const {
  setPersonalInfo,
  incrementStep,
  decrementStep,
  setCurrentStep,
  setUserPlan,
  setUserAddOns,
} = UserDetailsSlice.actions;

export default UserDetailsSlice.reducer;
