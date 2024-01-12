"use client";
import {
  setActiveCategory,
  setProducts,
  setSearchValue,
} from "@/app/redux/slices/productsSlice";
import { useAppDispatch, useAppSelector } from "@/app/redux/store";
import { Label, TextInput } from "flowbite-react";
import { CiSearch } from "react-icons/ci";

export default function SearchInput() {
  const dispatch = useAppDispatch();
  const { initProducts, searchValue } = useAppSelector(
    (state) => state.products
  );

  const onInputChange = (value: string) => {
    dispatch(setSearchValue(value));

    // filter title and category
    const updatedProducts = initProducts.filter(
      (el) =>
        el.title.toLowerCase().includes(value) || el.category.includes(value)
    );

    dispatch(setActiveCategory("all"));
    dispatch(setProducts(updatedProducts));
  };

  return (
    <div className="max-w-md mx-auto my-10">
      <Label htmlFor="text" />
      <TextInput
        onChange={(e) => onInputChange(e.target.value.toLowerCase())}
        id="text"
        type="text"
        value={searchValue}
        icon={CiSearch}
        placeholder="search by name or category"
      />
    </div>
  );
}
