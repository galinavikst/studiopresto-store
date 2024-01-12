"use client";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { FormEvent, useState } from "react";
import { onInputChange, resetInputs } from "../../redux/slices/orderSlice";
import isValid, { IsValid } from "../../order/validation";
import InputBlock from "../atoms/InputBlock";
import Title from "../atoms/Title";
import Lottie from "lottie-react";
import lottieSent from "../../../public/send-animation.json";

export default function FormSection() {
  const dispatch = useAppDispatch();
  const { inputs } = useAppSelector((state) => state.order);
  const { cardProducts } = useAppSelector((state) => state.productsCard);
  const [isFormSubmitet, setIsFormSubmitet] = useState(false);

  // handle input value onchange and check if value is valid
  const handleInputChange = (name: string, value: string) => {
    const isValidInput = isValid[name as keyof IsValid](value);
    dispatch(onInputChange({ name, value, isValidInput }));
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();

    const clientDetails = {} as { [key: string]: string };
    inputs.forEach((el) => {
      clientDetails[el.name] = el.value;
    });

    const orderDetails = {} as {
      [key: string]: string | { count: number | undefined; price: number };
    };
    cardProducts.forEach((el) => {
      orderDetails[el.id] = { count: el.count, price: el.price };
    });

    console.log("order:", orderDetails, "\nclient:", clientDetails);

    setIsFormSubmitet(true);
    dispatch(resetInputs());

    setTimeout(() => {
      setIsFormSubmitet(false);
    }, 3000);
  };

  return (
    <div>
      <Title title="Confirm the order" />
      <form
        id="orderForm"
        onSubmit={(e) => handleFormSubmit(e)}
        className="flex max-w-md flex-col gap-5 my-20 mx-auto"
      >
        {inputs.map((input) => (
          <InputBlock input={input} onChange={handleInputChange} />
        ))}
      </form>
      {isFormSubmitet && (
        <Lottie
          animationData={lottieSent}
          className="fixed z-50 top-0 bottom-0 w-1/2 right-1/2 translate-x-1/2"
          loop={1}
        />
      )}
    </div>
  );
}
