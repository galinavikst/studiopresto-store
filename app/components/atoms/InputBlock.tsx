import { useMask } from "@react-input/mask";
import { Label, TextInput } from "flowbite-react";
import { Input } from "@/app/redux/slices/orderSlice";

type Props = {
  input: Input | undefined;
  onChange: (value: string, name: string) => void;
};

export default function InputBlock({ input, onChange }: Props) {
  const inputTeLRef = useMask({
    mask: "+380_________",
    replacement: { _: /\d/ },
  });

  if (!input) {
    return null;
  }

  const { name, isValid, value } = input;

  return (
    <div>
      <Label htmlFor={name} value={"Your " + name} />
      <TextInput
        type={name === "email" ? "email" : "text"}
        value={value}
        ref={name === "tel" ? inputTeLRef : null}
        onChange={(e) => onChange(name, e.target.value)}
        placeholder={
          name === "tel" ? "+380" : name === "email" ? "name@gmail.com" : ""
        }
        color={isValid ? "gray" : "failure"}
        helperText={
          !isValid && <span className="text-xs">{"Invalid " + name}</span>
        }
        required
        shadow
      />
    </div>
  );
}
