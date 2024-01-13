"use client";
import ProductsSection from "../components/organisms/ProductsSection";
import { useAppSelector } from "../redux/store";
import FormSection from "../components/organisms/FormSection";
import { Button } from "flowbite-react";
import TotalPrice from "../components/atoms/TotalPrice";

export default function OrderPage() {
  const { cardProducts } = useAppSelector((state) => state.productsCard);
  const { inputs } = useAppSelector((state) => state.order);

  const isFormValid = Object.values(inputs).every((input) => input.isValid);

  return (
    <main>
      <FormSection />
      <ProductsSection key="order" products={cardProducts} title="My order" />
      {cardProducts.length !== 0 && (
        <>
          <TotalPrice />
          <Button
            form="orderForm"
            className="m-auto"
            size="lg"
            gradientDuoTone="purpleToBlue"
            type="submit"
            disabled={!isFormValid}
          >
            Send order
          </Button>
        </>
      )}
    </main>
  );
}
