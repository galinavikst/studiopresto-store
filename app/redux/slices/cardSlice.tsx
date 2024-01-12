import { createSlice } from "@reduxjs/toolkit";
import { Product } from "./productsSlice";

type CardState = {
  cardProducts: Product[];
};

const initialState: CardState = {
  cardProducts: [],
};

const productCardSlice = createSlice({
  name: "productsCard",
  initialState,
  reducers: {
    addProductToCard(state, action) {
      state.cardProducts = [action.payload, ...state.cardProducts];
    },
    removeProductFromCard(state, action) {
      state.cardProducts = state.cardProducts.filter(
        (el) => el.id !== action.payload.id
      );
    },
    changeSingleCardProduct(state, action) {
      state.cardProducts = state.cardProducts.map((el) =>
        el.id === action.payload.id ? action.payload : el
      );
    },
  },
});

export const {
  addProductToCard,
  changeSingleCardProduct,
  removeProductFromCard,
} = productCardSlice.actions;

export default productCardSlice.reducer;
