import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchCategoriesByDate } from "./asyncActions";
import { IAdminState, ICategoryByDate } from "./types";

const initialState: IAdminState = {
  categories: [],
  categoriesCount: 0,
};

export const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    setCategoriesCount(state) {
      state.categoriesCount++;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCategoriesByDate.fulfilled, (state, action: PayloadAction<ICategoryByDate>) => {
      state.categories = action.payload.data;
    });
    builder.addCase(fetchCategoriesByDate.pending, (state) => {});
    builder.addCase(fetchCategoriesByDate.rejected, (state) => {
      state.categories = [];
    });
  },
});

// Action creators are generated for each case reducer function
 export const { setCategoriesCount } = adminSlice.actions;

export default adminSlice.reducer;
