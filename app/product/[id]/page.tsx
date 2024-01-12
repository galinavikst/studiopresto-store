"use client";
import ProductCard from "@/app/components/molecules/ProductCard";
import { useAppSelector } from "@/app/redux/store";
import React from "react";

type Props = {
  params: { id: string };
};

export default function ProductPage({ params }: Props) {
  const { products } = useAppSelector((state) => state.products);
  const product = products.flat().find((el) => el.id === Number(params.id));

  return <main>{product && <ProductCard product={product} />}</main>;
}
