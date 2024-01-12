"use client";
import { useEffect } from "react";
import Aside from "./components/molecules/Aside";
import ProductsSection from "./components/organisms/ProductsSection";
import { useGetProductsQuery } from "./redux/slices/apiSlice";
import { useAppDispatch, useAppSelector } from "./redux/store";
import { setInitProducts, setProducts } from "./redux/slices/productsSlice";
import Loader from "./components/atoms/Loader";

export default function Home() {
  const dispatch = useAppDispatch();
  const { products, page, activeCategory } = useAppSelector(
    (state) => state.products
  );
  const { isLoading, data } = useGetProductsQuery();

  // initial set all products
  useEffect(() => {
    if (data) {
      dispatch(setProducts(data));
      dispatch(setInitProducts(data));
    }
  }, [data]);

  return (
    <main className="flex">
      {!isLoading ? (
        <>
          <Aside />
          {/* {products.length ? ( */}
          <ProductsSection
            key="home"
            products={products[page - 1]}
            title={activeCategory.toLocaleUpperCase()}
          />
          {/* ) : (
            <p>no items...</p>
          )} */}
        </>
      ) : (
        <Loader />
      )}
    </main>
  );
}
