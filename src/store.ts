import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slices/todo";
import { loggerMiddleware, tryMiddleware } from "./middleware";
import { combineReducers } from "redux";
import { todoApiService } from "./services/todoApi";

const reducers = combineReducers({
  todoReducer,
  [todoApiService.reducerPath]: todoApiService.reducer,
});

const store = configureStore({
  reducer: reducers,
  middleware: (getCurrentMiddlewares) => {
    return (
      getCurrentMiddlewares()
        // .concat(loggerMiddleware)
        // .concat(tryMiddleware)
        .concat(todoApiService.middleware)
    );
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof reducers>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
