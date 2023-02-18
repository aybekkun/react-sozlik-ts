import { configureStore } from "@reduxjs/toolkit";
import search from "./search/slice";
import words from "./words/slice";
import scroll from "./scroll/slice";
const store = configureStore({
  reducer: {
    search,
    words,
    scroll
  },
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
