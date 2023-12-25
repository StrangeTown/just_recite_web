import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import appLocalstorage from "../../utils/appLocalstorage";

interface SettingState {
	enFont: string;
	contactUsVisible?: boolean;
}

const initialState: SettingState = {
	enFont: appLocalstorage.getItem(appLocalstorage.keys.enFont) || "Roboto",
	contactUsVisible: false,
};

const settingSlice = createSlice({
	name: "setting",
	initialState,
	reducers: {
		setEnFont(state, action: PayloadAction<string>) {
			state.enFont = action.payload;
		},
		setContactUsVisible(state, action: PayloadAction<boolean>) {
			state.contactUsVisible = action.payload;
		},
	},
});

export const { setEnFont, setContactUsVisible } = settingSlice.actions;
export const selectEnFont = (state: { settings: SettingState }) =>
	state.settings.enFont;
export const selectContactUsVisible = (state: { settings: SettingState }) =>
	state.settings.contactUsVisible;
export default settingSlice.reducer;
