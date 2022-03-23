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
      <textarea
        id={id}
        rows={rows}
        className="border-[1.5px] border-gray-400 border-opacity-60 rounded-lg py-2 outline-none focus:border-amber-500 focus:ring-1 flex-grow ring-amber-500 transition-shadow duration-300 px-2"
        {...register}
      />
    </div>
  );
}
