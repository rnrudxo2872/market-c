import { memo } from "react";
import { IBaseBtnProps } from "./interfaces";

export default memo(function BaseBtn({ children, OnClick }: IBaseBtnProps) {
  return (
    <button
      className="w-full flex-1 bg-yellow-500 text-stone-100 font-semibold text-sm py-2 rounded-md hover:bg-amber-500 hover:bg-opacity-80"
      onClick={OnClick}
    >
      {children}
    </button>
  );
});
