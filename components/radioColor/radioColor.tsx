import { MouseEvent, useRef, useState } from "react";
import { RadioColorProps } from "./radioColor.interface";

export default function RadioColor({ title, colors }: RadioColorProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [clickedColor, setClickedColor] = useState<string>("");
  const clickHandler = (event: MouseEvent<HTMLButtonElement>) => {
    const {
      dataset: { color },
    } = event.currentTarget;

    if (color) {
      setClickedColor(color);
    }
  };

  if (clickedColor.length > 0) {
    const children = rootRef.current
      ?.children as HTMLCollectionOf<HTMLButtonElement>;
    if (children) {
      for (const element of children) {
        element.dataset.color === clickedColor
          ? element.classList.add("ring-2")
          : element.classList.remove("ring-2");
      }
    }
  }

  return (
    <div className="flex space-x-1" ref={rootRef}>
      {colors.map((color) => (
        <button
          key={`${title}-${color}`}
          data-color={color}
          className={`rounded-full w-5 h-5 bg-${color} ring-${color} ring-offset-1 transition`}
          onClick={clickHandler}
        ></button>
      ))}
    </div>
  );
}
