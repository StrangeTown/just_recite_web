import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface recitePageState {
  cracyModeVisible: boolean
  cycleModeVisible: boolean
}

const initialState: recitePageState = {
  cracyModeVisible: false,
  cycleModeVisible: false,
}

const reciteSlice = createSlice({
  name: "recitePage",
  initialState,
  reducers: {
    setCrazyModeVisible(state, action: PayloadAction<boolean>) {
      state.cracyModeVisible = action.payload
    },
    setCycleModeVisible(state, action: PayloadAction<boolean>) {
      state.cycleModeVisible = action.payload
    },
  },
})

export const { setCrazyModeVisible, setCycleModeVisible } = reciteSlice.actions
export const selectCracyModeVisible = (state: {
  recitePage: recitePageState
}) => state.recitePage.cracyModeVisible
export const selectCycleModeVisible = (state: {
  recitePage: recitePageState
}) => state.recitePage.cycleModeVisible
export default reciteSlice.reducer
