import { createSlice } from "@reduxjs/toolkit";

export const hospitalSlice = createSlice({
  name: "hospital",
  initialState: {
    data: [],
    filterdData: [],
    target: "",
    showAll: true,
    loading: false,
    error: null,
  },
  reducers: {
    fetchDataStart: (state) => {
      state.loading = true;
    },
    fetchDataSuccess: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    fetchDataFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    stateFilteredData: (state, action) => {
      state.filterdData = action.payload;
    },
    toggleShowAll: (state, action) => {
      state.showAll = action.payload
    },
    targetData: (state, action) =>{
      state.target = action.payload
    }
  },
});

export const { fetchDataStart, fetchDataSuccess, fetchDataFailure, stateFilteredData, toggleShowAll,targetData } = hospitalSlice.actions;
export default hospitalSlice.reducer;
