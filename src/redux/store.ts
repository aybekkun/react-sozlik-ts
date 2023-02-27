import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";
import search from "./search/slice";
import words from "./words/slice";
import scroll from "./scroll/slice";
import auth from "./auth/slice";
import admin from "./admin/slice";
const persistConfig = {
  key: "root",
  version: 2,
  storage,
};
const authReducer = persistReducer(persistConfig, auth);
const store = configureStore({
  reducer: {
    auth: authReducer,
    search,
    words,
    scroll,
    admin,
  },
  devTools: false,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export let persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
