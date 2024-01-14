import { createSlice } from "@reduxjs/toolkit";
import { Product } from "./productsSlice";

type CartState = {
  cartProducts: Product[];
};

const initialState: CartState = {
  cartProducts: [],
};

const productCartSlice = createSlice({
  name: "productsCart",
  initialState,
  reducers: {
    addProductToCart(state, action) {
      state.cartProducts = [action.payload, ...state.cartProducts];
    },
    removeProductFromCart(state, action) {
      state.cartProducts = state.cartProducts.filter(
        (el) => el.id !== action.payload.id
      );
    },
    changeSingleCardProduct(state, action) {
      state.cartProducts = state.cartProducts.map((el) =>
        el.id === action.payload.id ? action.payload : el
      );
    },
  },
});

export const {
  addProductToCart,
  changeSingleCardProduct,
  removeProductFromCart,
} = productCartSlice.actions;

export default productCartSlice.reducer;
