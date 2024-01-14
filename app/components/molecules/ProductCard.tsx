"use client";
import { Button, Card } from "flowbite-react";
import Image from "next/image";
import { Product, showConfirmation } from "../../redux/slices/productsSlice";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import Price from "../atoms/Price";
import ProductRate from "../atoms/ProductRate";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import {
  addProductToCart,
  removeProductFromCart,
} from "../../redux/slices/cartSlice";
import ProductCount from "./ProductCount";
import Quantity from "../atoms/Quantity";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const { id, title, image, category, price, description, rating, count } =
    product;

  const { products } = useAppSelector((state) => state.products);
  const { cartProducts } = useAppSelector((state) => state.productsCart);

  const handleConfirmation = (text: string, color: string) => {
    dispatch(showConfirmation({ text, isVisible: true, color }));
    setTimeout(() => {
      dispatch(showConfirmation({ text: "", isVisible: false, color: "" }));
    }, 3000);
  };

  const handleCardBntClick = (e: React.MouseEvent, cardId: number) => {
    e.stopPropagation();
    let product;

    if (pathname === "/card") {
      // remove card
      product = cartProducts.find((el) => el.id === cardId);

      dispatch(removeProductFromCart(product));
      handleConfirmation(`Product ${cardId} removed from cart`, "warning");
    } else {
      // add card if not added yet
      product = products.flat().find((el) => el.id === cardId);
      const isAdded = cartProducts.some((el) => el.id === cardId);

      if (!isAdded) {
        dispatch(addProductToCart(product));
        handleConfirmation(`Product ${cardId} added to cart`, "info");
      }
    }
  };

  // navidate to product details page
  const handleCardClick = (cardId: number) => {
    router.push(`/product/${cardId}`);
  };

  return (
    <Card
      onClick={() => handleCardClick(id)}
      className={`group break-inside-avoid mb-5 mx-auto ${
        pathname === "/" || pathname === "/card"
          ? "w-full cursor-pointer overflow-hidden"
          : "w-1/2 bg-transparent shadow-none border-none overflow-visible"
      } ${pathname === "/order" ? "md:w-1/4 w-auto" : ""} 
      ${pathname === `/product/${product.id}` ? "mt-5 md:max-w-full w-2/3" : ""}
      `}
      horizontal={pathname === "/card" || pathname === `/product/${product.id}`}
      renderImage={() => (
        <Image
          className={`${pathname === "/" ? "group-hover:scale-105" : ""} 
        ${pathname === `/product/${product.id}` ? "max-w-xs m-auto" : ""}
        size-auto`}
          width={300}
          height={300}
          src={image}
          alt={title}
        />
      )}
    >
      <h3 className="text-lg font-bold">{title}</h3>
      {pathname !== "/card" && pathname !== "/order" && (
        <p className="italic">{category}</p>
      )}
      {pathname === `/product/${id}` && (
        <>
          <p>{description}</p>
          <ProductRate rate={rating.rate} />
        </>
      )}
      <Price price={price} />
      {pathname === "/card" && <ProductCount count={count} cardId={id} />}
      {pathname === "/order" && <Quantity count={count} />}
      {pathname !== "/order" && (
        <Button onClick={(e) => handleCardBntClick(e, id)}>
          {pathname === "/card" ? "I don't want it" : "I want it"}
        </Button>
      )}
    </Card>
  );
}
