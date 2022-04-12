import { TInput } from "@components/types";
import { memo } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

export interface IInputProps {
  type: TInput;
  id: string;
  register: UseFormRegisterReturn;
  placeholder?: string;
  value?: string;
}

export default memo(function Input({
  type,
  id,
  register,
  placeholder,
  value,
}: IInputProps) {
  return (
    <>
      {type === "text" ? (
        <input
          id={id}
          placeholder={placeholder}
          type="text"
          className="border-[1.5px] border-gray-400 border-opacity-60 rounded-lg py-2 outline-none focus:border-amber-500 focus:ring-1 ring-amber-500 transition-shadow duration-300 px-2"
          {...register}
          value={value}
        />
      ) : null}
      {type === "phone" ? (
        <div className="flex flex-row-reverse">
          <input
            id={id}
            placeholder={placeholder}
            type="text"
            className="border-[1.5px] border-gray-400 border-opacity-60 rounded-lg rounded-l-none py-2 outline-none focus:border-amber-500 focus:ring-1 flex-grow peer ring-amber-500 transition-shadow duration-300 px-2"
            {...register}
            value={value}
          />
          <div className="bg-slate-200 flex items-center border border-gray-400 border-r-0 rounded-l-md peer-focus:ring-1 peer-focus:border-amber-500 ring-amber-500 transition-shadow duration-300">
            <span className="text-slate-500 font-semibold px-1">+82</span>
          </div>
        </div>
      ) : null}
      {type === "email" ? (
        <input
          id={id}
          placeholder={placeholder}
          type="email"
          className="border-[1.5px] border-gray-400 border-opacity-60 rounded-lg py-2 outline-none focus:border-amber-500 focus:ring-1 ring-amber-500 transition-shadow duration-300 px-2"
          {...register}
          value={value}
        />
      ) : null}
      {type === "number" ? (
        <input
          id={id}
          placeholder={placeholder}
          type="number"
          className="border-[1.5px] border-gray-400 border-opacity-60 rounded-lg py-2 outline-none focus:border-amber-500 focus:ring-1 ring-amber-500 transition-shadow duration-300 px-2"
          {...register}
          value={value}
        />
      ) : null}
      {type === "price" ? (
        <div className="relative">
          <span className="absolute left-2 bottom-0 top-0 my-auto inline-flex items-center text-lg">
            {"$"}
          </span>
          <span className="absolute right-2 bottom-0 top-0 my-auto inline-flex items-center text-lg text-gray-400 select-none">
            {"USD"}
          </span>
          <input
            id={id}
            type="number"
            placeholder={placeholder}
            {...register}
            className="w-full appearance-none border-[1.5px] border-gray-400 border-opacity-60 rounded-lg py-2 outline-none focus:border-amber-500 focus:ring-1 ring-amber-500 transition-shadow duration-300 pl-5"
          />
        </div>
      ) : null}
    </>
  );
});
