import React from "react";
import { memo } from "react";

interface IChatBubbleProps {
  me?: boolean;
  text: string;
  time: string;
}

export default memo(function ChatBubble({
  text,
  time,
  me = false,
}: IChatBubbleProps) {
  function splitLIne(text: string) {
    return text
      .split("\n")
      .map((text) => <p key={Math.random() + text}>{text}</p>);
  }
  return (
    <>
      {me ? (
        <div className="flex gap-x-2 flex-row-reverse">
          <section className="bg-amber-400 bg-opacity-60 rounded-2xl py-2 px-3 text-opacity-70 text-black">
            {splitLIne(text)}
          </section>
          <section className="flex items-end text-xs text-gray-400">
            <span>{time}</span>
          </section>
        </div>
      ) : (
        <div className="flex gap-x-2">
          <div className="w-10 h-10 rounded-full bg-gray-300" />
          <section className="bg-gray-200 bg-opacity-80 rounded-2xl py-2 px-3">
            {splitLIne(text)}
          </section>
          <section className="flex items-end text-xs text-gray-400">
            <span>{time}</span>
          </section>
        </div>
      )}
    </>
  );
});
