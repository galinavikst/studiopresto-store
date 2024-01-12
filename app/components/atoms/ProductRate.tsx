import { Rating } from "flowbite-react";

type Props = {
  rate: number;
};

export default function ProductRate({ rate }: Props) {
  const arr = Array(5).fill(0);
  const rating = arr.map((num, i) => (i < Math.round(rate) ? 1 : num));

  return (
    <Rating>
      {rating.map((num, i) => (
        <Rating.Star key={"star " + i} filled={num} />
      ))}
    </Rating>
  );
}
