import { createAsyncThunk } from "@reduxjs/toolkit";
import { $authHost } from "../../api/axios";
import { ICategoryByDate } from "./types";

export const fetchCategoriesByDate = createAsyncThunk("admin/fetchCategoriesByDate", async (_, thunkAPI) => {
  try {
    const { data } = await $authHost.get<ICategoryByDate>(`/categoriesdate`);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue("Ошибка " + error);
  }
});

type createCategoryProps = {
  kiril: string;
  latin: string;
};

export const createCategory = createAsyncThunk(
  "admin/createCategory",
  async (params: createCategoryProps, thunkAPI) => {
    try {
      const { data } = await $authHost.post(`/categories`, params);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Ошибка " + error);
    }
  }
);
type updateCategoryProps = {
  id: number | string;
  kiril: string;
  latin: string;
};

export const updateCategory = createAsyncThunk(
  "admin/updateCategory",
  async (params: updateCategoryProps, thunkAPI) => {
    const { id, ...data } = params;
    try {
      const res = await $authHost.put(`/categories/${id}`, data);
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue("Ошибка " + error);
    }
  }
);

export const deleteCategory = createAsyncThunk("admin/deleteCategory", async (id: number | string, thunkAPI) => {
  try {
    const res = await $authHost.delete(`/categories/${id}`);
    return res;
  } catch (error) {
    return thunkAPI.rejectWithValue("Ошибка " + error);
  }
});

export const createWord = createAsyncThunk("admin/createWord", async (fd: FormData, thunkAPI) => {
  try {
    const { data } = await $authHost.post(`/words`, fd);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue("Ошибка " + error);
  }
});

export const deleteWord = createAsyncThunk("admin/deleteWord", async (id: number | string, thunkAPI) => {
  try {
    const res = await $authHost.delete(`/words/${id}`);
    return res;
  } catch (error) {
    return thunkAPI.rejectWithValue("Ошибка " + error);
  }
});
