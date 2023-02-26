import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getLang } from "../../helpers/convertor/convertor";
import { fetchCategoriesByDate } from "./asyncActions";
import { IAdminState, ICategoryByDate } from "./types";

const initialState: IAdminState = {
  categories: [],
  categoriesCount: 0,
  lang: false,
};

export const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    setCategoriesCount(state) {
      state.categoriesCount++;
    },
    setLang(state) {
      if (getLang()) {
        window.localStorage.setItem("lang", "kiril");
        state.lang = false;
      } else {
        window.localStorage.setItem("lang", "latin");
        state.lang = true;
      }
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
export const { setCategoriesCount, setLang } = adminSlice.actions;

export default adminSlice.reducer;
