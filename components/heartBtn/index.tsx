import { memo, useEffect, useState } from "react";

export interface IHeartBtnProps {
  OnClick: () => void;
  isOn?: boolean;
}

export default memo(function HeartBtn({
  OnClick,
  isOn = false,
}: IHeartBtnProps) {
  const [on, setOn] = useState(false);

  useEffect(() => {
    if (isOn) setOn(true);
  }, [isOn]);

  function clickHandler() {
    setOn((prev) => !prev);
    OnClick();
  }

  return (
    <button className="px-4" onClick={clickHandler}>
      <svg
        className={"w-5 h-5 " + (on ? "text-yellow-300" : "text-stone-400")}
        stroke="currentColor"
        viewBox="0 0 24 24"
        {...(on ? { fill: "currentColor" } : { fill: "none" })}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        ></path>
      </svg>
    </button>
  );
});
