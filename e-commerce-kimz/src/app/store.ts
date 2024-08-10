import { configureStore } from "@reduxjs/toolkit";
import { categoriesReducer as categories } from "@features/categories/categoriesSlice";
import { productsReducer as products } from "@features/products/productsSlice";

export const store = configureStore({
  reducer: {
    categories,
    products,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
