import { MouseEvent, useRef, useState } from "react";

export default function RadioColor() {
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
      <button
        data-color="indigo-400"
        className="rounded-full w-5 h-5 bg-indigo-400 ring-indigo-400 ring-offset-1 transition"
        onClick={clickHandler}
      />
      <button
        data-color="yellow-400"
        className="rounded-full w-5 h-5 bg-yellow-200 ring-yellow-400 ring-offset-1 transition"
        onClick={clickHandler}
      />
      <button
        data-color="red-400"
        className="rounded-full w-5 h-5 bg-red-400 ring-red-400 ring-offset-1 transition"
        onClick={clickHandler}
      />
    </div>
  );
}
