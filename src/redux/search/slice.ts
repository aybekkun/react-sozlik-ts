import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchCategories, fetchPopularList, fetchSearchWord, fetchWordsList } from "./asyncActions";
import { ICategories, ISearch, ISearchState } from "./types";

const initialState: ISearchState = {
  data: [],
  total: 0,
  currentPage: 1,
  isLoading: false,
  wordsList: [],
  isWordsListLoading: false,
  popularList: [],
  isPopularListLoading: false,
  count: 0,
  searchValue: "",
  searchListValue: "",
  searchLetter: "",
  categories: [
    {
      id: 0,
      latin: "",
      kiril: "",
      words_total: 0,
    },
  ],
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setSearchCount(state) {
      state.count++;
    },
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
    setSearchListValue(state, action) {
      state.searchListValue = action.payload;
      state.searchLetter = "";
    },
    setSearchLetter(state, action) {
      state.searchListValue = "";
      state.searchLetter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSearchWord.fulfilled, (state, action: PayloadAction<ISearch>) => {
      state.isLoading = false;
      state.data = action.payload.data;
    });
    builder.addCase(fetchSearchWord.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchSearchWord.rejected, (state) => {
      state.isLoading = false;
      state.data = [];
    });
    builder.addCase(fetchWordsList.fulfilled, (state, action: PayloadAction<ISearch>) => {
      state.isWordsListLoading = false;
      state.total = action.payload.total;
      state.wordsList = action.payload.data;
    });
    builder.addCase(fetchWordsList.pending, (state) => {
      state.isWordsListLoading = true;
    });
    builder.addCase(fetchWordsList.rejected, (state) => {
      state.isWordsListLoading = false;
      state.wordsList = [];
      state.total = 0;
    });
    builder.addCase(fetchPopularList.fulfilled, (state, action: PayloadAction<ISearch>) => {
      state.isPopularListLoading = false;
      state.popularList = action.payload.data;
    });
    builder.addCase(fetchPopularList.pending, (state) => {
      state.isPopularListLoading = true;
    });
    builder.addCase(fetchPopularList.rejected, (state) => {
      state.isPopularListLoading = false;
      state.popularList = [];
    });
    builder.addCase(fetchCategories.fulfilled, (state, action: PayloadAction<ICategories>) => {
      state.categories = action.payload.data;
    });
    builder.addCase(fetchCategories.pending, (state) => {});
    builder.addCase(fetchCategories.rejected, (state) => {});
  },
});

// Action creators are generated for each case reducer function
export const { setSearchPage, setSearchCount, setSearchValue, setSearchListValue,setSearchLetter } = searchSlice.actions;

export default searchSlice.reducer;
