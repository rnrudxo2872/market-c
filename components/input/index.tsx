import { memo } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface IInputProps {
  type: "text" | "phone" | "email";
  id: string;
  register: UseFormRegisterReturn;
}

export default memo(function Input({ type, id, register }: IInputProps) {
  return (
    <>
      {type === "text" ? (
        <input
          id={id}
          type="text"
          className="border-[1.5px] border-gray-400 border-opacity-60 rounded-lg py-2 outline-none focus:border-amber-500 focus:ring-1 ring-amber-500 transition-shadow duration-300 px-2"
          {...register}
        />
      ) : null}
      {type === "phone" ? (
        <div className="flex flex-row-reverse">
          <input
            id={id}
            type="text"
            className="border-[1.5px] border-gray-400 border-opacity-60 rounded-lg rounded-l-none py-2 outline-none focus:border-amber-500 focus:ring-1 flex-grow peer ring-amber-500 transition-shadow duration-300 px-2"
            {...register}
          />
          <div className="bg-slate-200 flex items-center border border-gray-400 border-r-0 rounded-l-md peer-focus:ring-1 peer-focus:border-amber-500 ring-amber-500 transition-shadow duration-300">
            <span className="text-slate-500 font-semibold px-1">+82</span>
          </div>
        </div>
      ) : null}
      {type === "email" ? (
        <input
          id={id}
          type="email"
          className="border-[1.5px] border-gray-400 border-opacity-60 rounded-lg py-2 outline-none focus:border-amber-500 focus:ring-1 ring-amber-500 transition-shadow duration-300 px-2"
          {...register}
        />
      ) : null}
    </>
  );
});
