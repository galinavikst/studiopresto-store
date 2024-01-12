import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Product } from "./productsSlice";

export const fakeStoreApi = createApi({
  reducerPath: "fakeStoreApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com/products/" }),
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => ``,
    }),
    getCategories: builder.query<string[], void>({
      query: () => "/categories",
    }),
    getCategory: builder.query<Product[], string>({
      query: (category) => `/category/${category}`,
    }),
  }),
});

export const {
  useGetProductsQuery,
  useLazyGetProductsQuery,
  useGetCategoriesQuery,
  useLazyGetCategoryQuery,
} = fakeStoreApi;
