import Input from "@components/input";
import { IInputWithLabelProps } from "./interfaces";

export default function InputWithLabel({
  id,
  labelText,
  register,
  type,
}: IInputWithLabelProps) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="font-semibold text-slate-500 select-none">
        {labelText}
      </label>
      <Input id={id} register={register} type={type} />
    </div>
  );
}
