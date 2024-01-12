"use client";
import { Button } from "flowbite-react";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { changeSingleCardProduct } from "../../redux/slices/cardSlice";

type Props = {
  count: number | undefined;
  cardId: number;
};

export default function ProductCount({ count = 1, cardId }: Props) {
  const dispatch = useAppDispatch();
  const { cardProducts } = useAppSelector((state) => state.productsCard);

  const handleCount = (e: React.MouseEvent, btn: string) => {
    e.stopPropagation();

    const productToChange = cardProducts.find((el) => el.id === cardId);

    let updatedCount;
    // check if count is between 1-5
    if (btn === "-" && count > 1) {
      updatedCount = count - 1;
    } else if (btn === "+" && count < 5) {
      updatedCount = count + 1;
    } else {
      return;
    }

    const updateProduct = { ...productToChange, count: updatedCount };

    dispatch(changeSingleCardProduct(updateProduct));
  };

  return (
    <div className="flex items-center gap-5">
      <Button
        onClick={(e) => handleCount(e, "-")}
        color="gray"
        size="sm"
        pill
        className="font-bold"
      >
        -
      </Button>
      <p>{count}</p>
      <Button
        onClick={(e) => handleCount(e, "+")}
        color="gray"
        size="sm"
        pill
        className="font-bold"
      >
        +
      </Button>
    </div>
  );
}
