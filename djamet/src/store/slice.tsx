import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  value: boolean;
}

const initialState: InitialState = {
  value: false,
};

const darkMode = createSlice({
  name: "dark",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.value = !state.value;
    },
  },
});

export const { toggleDarkMode } = darkMode.actions;
const Myreducer = darkMode.reducer;

export default Myreducer;
