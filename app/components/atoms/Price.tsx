import React from "react";

type Props = {
  price: number;
};

export default function Price({ price }: Props) {
  return (
    <p>
      price: <span className="text-pink-500">{price}$</span>
    </p>
  );
}
