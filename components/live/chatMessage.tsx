import { memo } from "react";

export default memo(function ChatMessage() {
  return (
    <div className="flex gap-x-2">
      <section className="flex flex-col items-start">
        <div className="w-10 h-10 rounded-full bg-gray-300" />
      </section>
      <section className="bg-gray-200 bg-opacity-80 rounded-2xl py-2 px-3 text-sm">
        <section className="inline-flex mr-2">
          <span className="font-semibold">제임구리</span>
        </section>
        <span>안녕하세요.</span>
        <span>네고 되나요?</span>
      </section>
      <section className="flex items-end text-xs text-gray-400">
        <span>오후 2:49</span>
      </section>
    </div>
  );
});
