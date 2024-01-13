type Props = {
  count: number | undefined;
};

export default function Quantity({ count = 1 }: Props) {
  return <p>quantity: {count}</p>;
}
