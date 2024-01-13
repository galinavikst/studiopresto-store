"use client";
import { ListGroup } from "flowbite-react";
import React from "react";
import {
  useGetCategoriesQuery,
  useLazyGetCategoryQuery,
  useLazyGetProductsQuery,
} from "../../redux/slices/apiSlice";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import {
  setActiveCategory,
  setPage,
  setProducts,
} from "../../redux/slices/productsSlice";

export default function Aside() {
  const dispatch = useAppDispatch();
  const { data } = useGetCategoriesQuery();
  const [getCategoryProducts] = useLazyGetCategoryQuery();
  const [getAllProducts] = useLazyGetProductsQuery();
  const { activeCategory } = useAppSelector((state) => state.products);

  // fetch needed category
  const handleCategorieClick = async (category: string) => {
    if (category === "all") {
      const { data } = await getAllProducts();
      dispatch(setProducts(data));
    } else {
      const { data } = await getCategoryProducts(category);
      dispatch(setProducts(data));
    }
    dispatch(setActiveCategory(category));
    dispatch(setPage(1));
  };

  return (
    <aside className="my-20 w-full md:w-fit">
      <ListGroup className="md:w-48 w-inherit border-none bg-transparent">
        <ListGroup.Item
          active={"all" === activeCategory}
          onClick={() => handleCategorieClick("all")}
          className="[&>button]:justify-center [&>button]:md:justify-start [&>*]:first:rounded-t-none [&>*]:last:rounded-b-none"
        >
          ALL
        </ListGroup.Item>
        {data &&
          data.map((category) => (
            <ListGroup.Item
              active={category === activeCategory}
              key={category}
              onClick={() => handleCategorieClick(category)}
              className="[&>button]:justify-center [&>button]:md:justify-start [&>*]:first:rounded-t-none [&>*]:last:rounded-b-none"
            >
              {category.toUpperCase()}
            </ListGroup.Item>
          ))}
      </ListGroup>
    </aside>
  );
}
