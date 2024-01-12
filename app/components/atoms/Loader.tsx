import { Spinner } from "flowbite-react";

export default function Loader() {
  return (
    <div className="size-full flex justify-center my-20">
      <Spinner size="xl" />
    </div>
  );
}
