"use client";
import { useAppSelector } from "@/app/redux/store";

export default function TotalPrice() {
  const { cardProducts } = useAppSelector((state) => state.productsCard);
  const total = cardProducts.reduce((acc, el) => {
    acc += el.count ? el.count * el.price : el.price;
    return acc;
  }, 0);

  return (
    <p className="text-center font-bold text-lg my-5">
      Total: <span className="text-pink-500">{total}$</span>
    </p>
  );
}
