"use client";
import { Badge } from "flowbite-react";
import { HiShoppingCart } from "react-icons/hi";
import Link from "next/link";
import { useAppSelector } from "../../redux/store";

export default function Header() {
  const { cartProducts } = useAppSelector((state) => state.productsCart);
  return (
    <header className="py-3 px-5 flex justify-between items-center border-b border-gray-200">
      {/* let h1 to be here :) */}
      <h1 className="flex items-center text-xs after:content-['test-task'] after:ml-0.5 after:text-pink-300 italic">
        <Link href="/">
          <img src="./studioPresto-logo.svg" alt="company logo" />
        </Link>
      </h1>
      <Link href="/card" className="p-3 rounded-full bg-gray-300">
        <HiShoppingCart className="size-8" />
        {cartProducts.length !== 0 && (
          <Badge
            color="pink"
            className="size-6 flex justify-center absolute -right-2.5 top-0 p-1 rounded-full"
          >
            {cartProducts.length}
          </Badge>
        )}
      </Link>
    </header>
  );
}
