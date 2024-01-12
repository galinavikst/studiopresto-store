"use client";
import React from "react";
import { useAppSelector } from "../redux/store";
import ProductsSection from "../components/organisms/ProductsSection";
import Link from "next/link";
import { Button } from "flowbite-react";

type Props = {};

export default function CardPage({}: Props) {
  const { cardProducts } = useAppSelector((state) => state.productsCard);

  return (
    <main>
      <ProductsSection key="wishes" products={cardProducts} title="My wishes" />
      <Link href="/order">
        {cardProducts.length !== 0 && (
          <Button className="m-auto" size="lg" gradientDuoTone="purpleToPink">
            Make it happen!
          </Button>
        )}
      </Link>
    </main>
  );
}
