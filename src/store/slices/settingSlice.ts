import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import appLocalstorage from "../../utils/appLocalstorage";

interface SettingState {
  enFont: string;
}

const initialState: SettingState = {
  enFont: appLocalstorage.getItem(appLocalstorage.keys.enFont) || 'Satisfy',
};

const settingSlice = createSlice({
  name: 'setting',
  initialState,
  reducers: {
    setEnFont(state, action: PayloadAction<string>) {
      state.enFont = action.payload;
    },
  },
});

export const { setEnFont } = settingSlice.actions;
export const selectEnFont = (state: { settings: SettingState }) => state.settings.enFont;
export default settingSlice.reducer;