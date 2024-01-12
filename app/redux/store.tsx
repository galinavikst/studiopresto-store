"use client";
import { TypedUseSelectorHook } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { fakeStoreApi } from "./slices/apiSlice";
import productsReducer from "./slices/productsSlice";
import cardProductReducer from "./slices/cardSlice";
import orderReducer from "./slices/orderSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    productsCard: cardProductReducer,
    order: orderReducer,
    [fakeStoreApi.reducerPath]: fakeStoreApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(fakeStoreApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
