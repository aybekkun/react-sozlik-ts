import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IScrollState {
  x: number;
  y: number;
}

const initialState: IScrollState = {
  x: 0,
  y: 0,
};

export const scrollSlice = createSlice({
  name: "scroll",
  initialState,
  reducers: {
    setX(state, action: PayloadAction<number>) {
      state.x = action.payload;
    },
    setY(state, action: PayloadAction<number>) {
      state.y = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

// Action creators are generated for each case reducer function
export const { setX, setY } = scrollSlice.actions;

export default scrollSlice.reducer;
