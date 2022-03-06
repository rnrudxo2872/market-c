import { memo, MouseEvent, useEffect, useRef, useState } from "react";
import { RadioColorProps, RaidoColor } from "./radioColor.interface";

export default memo(function RadioColor({
  title,
  colors,
  clickColorHandler,
}: RadioColorProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [clickedColor, setClickedColor] = useState<string>("");
  const clickHandler = (event: MouseEvent<HTMLButtonElement>) => {
    const {
      dataset: { color },
    } = event.currentTarget;

    if (color) {
      clickColorHandler(color);
      setClickedColor(color);
    }
  };

  useEffect(() => {
    if (clickedColor.length) {
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
  }, [clickedColor]);

  return (
    <div className="flex space-x-1" ref={rootRef}>
      {colors.map(({ color, bgColor, ringColor }) => (
        <button
          key={`${title}-${color}`}
          data-color={color}
          className={`rounded-full w-5 h-5 ${bgColor} ${ringColor} ring-offset-1 transition`}
          onClick={clickHandler}
        ></button>
      ))}
    </div>
  );
});
