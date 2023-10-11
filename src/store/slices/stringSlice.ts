import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { tStringItem } from "../../data";

interface StringState {
  randomStrings: tStringItem[];
}

const initialState: StringState = {
  randomStrings: [],
};

const stringSlice = createSlice({
  name: 'string',
  initialState,
  reducers: {
    setRandomStrings(state, action: PayloadAction<tStringItem[]>) {
      state.randomStrings = action.payload;
    },
  },
});

export const { setRandomStrings } = stringSlice.actions;
export const selectRandomStrings = (state: { string: StringState }) => state.string.randomStrings;
export default stringSlice.reducer;