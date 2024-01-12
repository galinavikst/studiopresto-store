import { createSlice } from "@reduxjs/toolkit";

export type Input = {
  name: string;
  value: string;
  isValid: boolean;
};

type OrderState = {
  inputs: Input[];
};

const initialState: OrderState = {
  inputs: [
    {
      name: "name",
      isValid: true,
      value: "",
    },
    {
      name: "email",
      value: "",
      isValid: true,
    },
    {
      name: "tel",
      value: "",
      isValid: true,
    },
  ],
};
const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    onInputChange(state, action) {
      const { name, value, isValidInput } = action.payload;
      state.inputs = state.inputs.map((input) =>
        input.name === name
          ? { ...input, value: value, isValid: isValidInput }
          : input
      );
    },
    resetInputs(state) {
      state.inputs = state.inputs.map((input) => ({ ...input, value: "" }));
    },
  },
});

export const { onInputChange, resetInputs } = orderSlice.actions;

export default orderSlice.reducer;
