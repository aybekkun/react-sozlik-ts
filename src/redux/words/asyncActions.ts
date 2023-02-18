import { ISearchProps } from "./../types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { $host } from "../../api/axios";
import { IWord, IWords } from "./types";

export const fetchSingleWord = createAsyncThunk("words/fetchSingleWord", async (params: { id: string }, thunkAPI) => {
  try {
    const { data } = await $host.get<IWord>(`/words/${params.id}`, {
      params: params,
      // signal: params.signal,
    });
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue("Ошибка " + error);
  }
});

export const fetchWords = createAsyncThunk("words/fetchWords", async (params: ISearchProps, thunkAPI) => {
  try {
    const { data } = await $host.get<IWords>(`/words`, {
      params: params,
      signal: params.signal,
    });
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue("Ошибка " + error);
  }
});
