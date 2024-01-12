import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type Product = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  rating: { rate: number; count: number };
  title: string;
  count?: number | undefined;
};

type ProductsState = {
  initProducts: Product[];
  searchValue: string;
  products: Product[];
  activeCategory: string;
  page: number;
  confirmation: {
    text: string;
    isVisible: boolean;
    color: string;
  };
};

const initialState: ProductsState = {
  initProducts: [],
  products: [],
  page: 1,
  searchValue: "",
  activeCategory: "all",
  confirmation: {
    text: "",
    isVisible: false,
    color: "info",
  },
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state, action) {
      const chunkSize = 6;
      const result = [];
      for (let i = 0; i < action.payload.length; i += chunkSize) {
        result.push(action.payload.slice(i, i + chunkSize));
      }
      state.products = result;
    },
    showConfirmation(state, action) {
      state.confirmation = action.payload;
    },
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    setActiveCategory(state, action: PayloadAction<string>) {
      state.activeCategory = action.payload;
    },
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setInitProducts(state, action) {
      state.initProducts = action.payload;
    },
  },
});

export const {
  setSearchValue,
  setProducts,
  showConfirmation,
  setPage,
  setActiveCategory,
  setInitProducts,
} = productsSlice.actions;

export default productsSlice.reducer;
