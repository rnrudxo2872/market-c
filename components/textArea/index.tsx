import { ITextAreaProps } from "./interfaces";

export default function TextArea({ id, rows, register }: ITextAreaProps) {
  return (
    <textarea
      id={id}
      rows={rows}
      className="border-[1.5px] border-gray-400 border-opacity-60 rounded-lg py-2 outline-none focus:border-amber-500 focus:ring-1 flex-grow ring-amber-500 transition-shadow duration-300 px-2"
      {...register}
    />
  );
}
