import { IBaseTitleProps } from "./interfaces";

export default function BaseTitle({ title }: IBaseTitleProps) {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <span className="font-bold text-lg font-base">{title}</span>
    </div>
  );
}
