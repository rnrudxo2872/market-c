import { memo, useState } from "react";
import Image from "next/image";
import { joinClasses } from "@libs/common";
import { makeImageURL } from "@libs/client/utils";

interface IProps {
  images: string[];
}

export default memo(function SlideImages({ images }: IProps) {
  const [page, setPage] = useState(0);
  const [hover, setHover] = useState(false);

  return (
    <div className="w-full h-full relative">
      <button
        className={joinClasses(
          "text-white absolute left-3 top-[50%] z-50 rounded-full hover:ring-1 hover:ring-slate-400 transition-all duration-500",
          hover ? "opacity-100" : "opacity-0"
        )}
        onClick={() => setPage((prev) => Math.max(0, prev - 1))}
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        className={joinClasses(
          "text-white absolute right-3 top-[50%] z-50 rounded-full hover:ring-1 hover:ring-slate-400 transition-all duration-500",
          hover ? "opacity-100" : "opacity-0"
        )}
        onClick={() => setPage((prev) => Math.min(images.length - 1, prev + 1))}
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
      {images.map((image, index) => (
        <Image
          key={index}
          src={makeImageURL({ imageId: image, variant: "product" })}
          alt={`${index + 1}번 째 이미지`}
          layout="fill"
          className={joinClasses(
            "transition-all",
            page === index ? "opacity-100" : "opacity-0"
          )}
        />
      ))}
    </div>
  );
});
