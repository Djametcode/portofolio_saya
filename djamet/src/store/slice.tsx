import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  isDark: boolean;
}

const initialState: InitialState = {
  isDark: false,
};

const darkMode = createSlice({
  name: "dark",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.isDark = !state.isDark;
    },
  },
});

export const { toggleDarkMode } = darkMode.actions;
const Myreducer = darkMode.reducer;

export default Myreducer;
