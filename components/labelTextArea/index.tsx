import TextArea from "@components/textArea";
import { ITextAreaWithLabelProps } from "./interfaces";

export default function TextAreaWithLabel({
  id,
  labelText,
  register,
  rows = 3,
}: ITextAreaWithLabelProps) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="font-semibold text-slate-500 select-none">
        {labelText}
      </label>
      <TextArea id={id} register={register} rows={rows} />
    </div>
  );
}
