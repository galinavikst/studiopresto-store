"use client";
import Title from "../atoms/Title";
import ProductList from "./ProductList";
import { Product } from "../../redux/slices/productsSlice";
import PagePagination from "../molecules/PagePagination";
import { usePathname } from "next/navigation";
import SearchInput from "../atoms/SearchInput";

type Props = {
  products: Product[] | any;
  title: string;
};

export default function ProductsSection({ products, title }: Props) {
  const pathname = usePathname();

  return (
    <section className="mb-10 grow">
      {pathname === "/" && <SearchInput />}
      <Title title={title} />
      <ProductList products={products} />
      {pathname === "/" && <PagePagination />}
    </section>
  );
}
