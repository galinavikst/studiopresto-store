"use client";
import { useAppSelector } from "@/app/redux/store";
import { Alert } from "flowbite-react";

export default function Confirmation() {
  const { isVisible, text, color } = useAppSelector(
    (state) => state.products.confirmation
  );
  return (
    <>
      {isVisible && (
        <Alert
          color={color}
          className="fixed w-1/2 left-0 bottom-0 m-2 z-50 shadow"
        >
          <span className="font-medium">Info alert!</span> {text}
        </Alert>
      )}
    </>
  );
}
