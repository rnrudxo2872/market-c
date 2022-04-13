import { memo } from "react";

interface IProps {
  userId: number;
  name: string;
  content: string;
}

export default memo(function ChatMessage({ userId, name, content }: IProps) {
  return (
    <div className="flex gap-x-2">
      <section className="flex flex-col items-start">
        <div className="w-10 h-10 rounded-full bg-gray-300" />
      </section>
      <section className="bg-gray-200 bg-opacity-80 rounded-2xl py-2 px-3 text-sm max-w-xs">
        <section className="inline-flex mr-2">
          <span className="font-semibold">{name}</span>
        </section>
        <span>{content}</span>
      </section>
      <section className="flex items-end text-xs text-gray-400">
        <span>오후 2:49</span>
      </section>
    </div>
  );
});
