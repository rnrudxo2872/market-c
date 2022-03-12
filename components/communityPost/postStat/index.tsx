import { memo } from "react";
import { IPostStatProps } from "./interfaces";

export default memo(function PostStat({ comment, like }: IPostStatProps) {
  return (
    <section className="flex gap-4 items-center">
      <div className="flex gap-1 items-center py-2">
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <span className="text-sm">궁금해요</span>
        <span className="text-sm">{like}</span>
      </div>
      <div className="flex gap-1 items-center">
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          ></path>
        </svg>
        <span className="text-sm">답변</span>
        <span className="text-sm">{comment}</span>
      </div>
    </section>
  );
});
