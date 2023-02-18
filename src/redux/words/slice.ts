import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchSingleWord, fetchWords } from "./asyncActions";
import { IWord, IWords, IWordsState } from "./types";

const initialState: IWordsState = {
  data: [],
  total: 0,
  currentPage: 1,
  isLoading: false,
  count: 0,
  isWordLoading: false,
  selectedWord: {
    id: 0,
    latin: "",
    kiril: "",
    description_latin: "",
    description_kiril: "",
    count: "",
    audio: null,
    categories: [
      {
        id: 0,
        latin: "",
        kiril: "",
      },
    ],
    synonyms: [],
    antonyms: [],
  },
};

export const wordsSlice = createSlice({
  name: "words",
  initialState,
  reducers: {
    setWordsPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setWordsCount(state) {
      state.count++;
    },
    setSelectedWord(state, action) {
      state.selectedWord = { ...state.selectedWord, id: 0, kiril: action.payload };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWords.fulfilled, (state, action: PayloadAction<IWords>) => {
      state.isLoading = false;
      state.data = action.payload.data;
      state.total = action.payload.total;
    });
    builder.addCase(fetchWords.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchWords.rejected, (state) => {
      state.isLoading = false;
      state.data = [];
      state.total = 0;
    });
    builder.addCase(fetchSingleWord.fulfilled, (state, action: PayloadAction<IWord>) => {
      state.isWordLoading = false;
      state.selectedWord = action.payload.data;
    });
    builder.addCase(fetchSingleWord.pending, (state) => {
      state.isWordLoading = true;
    });
    builder.addCase(fetchSingleWord.rejected, (state) => {
      state.isWordLoading = false;
      state.selectedWord = {
        id: 0,
        latin: "",
        kiril: "",
        description_latin: "",
        description_kiril: "",
        count: "",
        audio: null,
        categories: [
          {
            id: 0,
            latin: "",
            kiril: "",
          },
        ],
        synonyms: [],
        antonyms: [],
      };
    });
  },
});

// Action creators are generated for each case reducer function
export const { setWordsPage, setWordsCount, setSelectedWord } = wordsSlice.actions;

export default wordsSlice.reducer;
