import { ISearchProps } from "./../types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { $host } from "../../api/axios";
import { ICategories, ISearch } from "./types";

export const fetchSearchWord = createAsyncThunk("search/fetchSearchWord", async (params: ISearchProps, thunkAPI) => {
  try {
    const { data } = await $host.get<ISearch>(`/search`, {
      params: params,
      signal: params.signal,
    });
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue("Ошибка " + error);
  }
});

export const fetchWordsList = createAsyncThunk("search/fetchWordsList", async (params: ISearchProps, thunkAPI) => {
  try {
    const { data } = await $host.get<ISearch>(`/search`, {
      params: params,
      signal: params.signal,
    });
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue("Ошибка " + error);
  }
});

export const fetchPopularList = createAsyncThunk("search/fetchPopularList", async (params: ISearchProps, thunkAPI) => {
  try {
    const { data } = await $host.get<ISearch>(`/search`, {
      params: params,
      signal: params.signal,
    });
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue("Ошибка " + error);
  }
});

export const fetchCategories = createAsyncThunk("search/fetchCategories", async (_, thunkAPI) => {
  try {
    const { data } = await $host.get<ICategories>(`/categories`);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue("Ошибка " + error);
  }
});
