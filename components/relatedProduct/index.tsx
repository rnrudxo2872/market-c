import { memo } from "react";
import { getLocalMonetUnit } from "../../libs/common";
import { IRelateProductProps } from "./interfaces";

export default memo(function RelateProduct({
  title,
  price,
}: IRelateProductProps) {
  return (
    <div className="">
      <section>
        <div className="h-32 bg-slate-400" />
      </section>
      <section className="flex flex-col leading-none pt-2">
        <span>{title}</span>
        <span className="text-sm font-semibold">
          {getLocalMonetUnit(Number(price), "us")}
        </span>
      </section>
    </div>
  );
});
