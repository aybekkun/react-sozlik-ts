import { createAsyncThunk } from "@reduxjs/toolkit";

import { $host, $authHost } from "../../api/axios";
type userAuthProps = {
  phone: string;
  password: string;
};
export const userAuth = createAsyncThunk("auth/userAuth", async (params: userAuthProps, thunkAPI) => {
  try {
    const { phone, password } = params;
    const {data} = await $host.post(`/authenticate`, { phone, password });
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue("Ошибка " + error);
  }
});

export const userCheck = createAsyncThunk("auth/userCheck", async (_, thunkAPI) => {
  try {
    const res = await $authHost.get(`/check`);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue("Ошибка " + error);
  }
});
