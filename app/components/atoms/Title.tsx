import React from "react";

type Props = {
  title: string;
};

export default function Title({ title }: Props) {
  return <h2 className="text-center my-20 text-xl font-bold">{title}</h2>;
}
