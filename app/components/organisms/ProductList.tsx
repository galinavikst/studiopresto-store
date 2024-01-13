"use client";
import ProductCard from "../molecules/ProductCard";
import { Product } from "../../redux/slices/productsSlice";
import { usePathname } from "next/navigation";

type Props = {
  products: Product[];
};

export default function ProductList({ products }: Props) {
  const pathname = usePathname();

  return (
    <div
      className={`${
        pathname === "/card" ? "columns-auto" : "columns-2 md:columns-3 "
      } ${pathname === "/order" ? "flex flex-wrap" : ""} grow px-10 gap-5 `}
    >
      {products?.length ? (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <p className="pl-20"> no items...</p>
      )}
    </div>
  );
}
