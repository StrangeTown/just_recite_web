import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { tStringItem } from "../../data"

export interface IStoreStringItem extends tStringItem {
  fromPrevSession?: boolean
}
interface StringState {
  randomStrings: IStoreStringItem[]
}

const initialState: StringState = {
  randomStrings: [],
}

const stringSlice = createSlice({
  name: "string",
  initialState,
  reducers: {
    setRandomStrings(state, action: PayloadAction<IStoreStringItem[]>) {
      state.randomStrings = action.payload
    },
  },
})

export const { setRandomStrings } = stringSlice.actions
export const selectRandomStrings = (state: { string: StringState }) =>
  state.string.randomStrings
export default stringSlice.reducer
