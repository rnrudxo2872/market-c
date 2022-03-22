import { NextPage } from "next";

const Upload: NextPage = () => {
  return (
    <div className="px-24 py-10 flex flex-col gap-y-4">
      <label className="border-4 border-dashed border-gray-400 py-20 flex justify-center rounded-lg hover:border-amber-400 hover:text-yellow-500">
        <svg
          className="h-12 w-12"
          stroke="currentColor"
          fill="none"
          viewBox="0 0 48 48"
          aria-hidden="true"
        >
          <path
            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <input type="file" className="hidden" />
      </label>
      <div className="flex flex-col gap-1">
        <label
          htmlFor="price"
          className="font-semibold text-slate-500 select-none"
        >
          가격
        </label>
        <input
          type="text"
          id="price"
          className="border-[1.5px] border-gray-400 border-opacity-60 rounded-lg py-2 outline-none focus:border-amber-500 focus:ring-1 flex-grow ring-amber-500 transition-shadow duration-300 px-2"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label
          htmlFor="price"
          className="font-semibold text-slate-500 select-none"
        >
          가격
        </label>
        <input
          type="text"
          id="price"
          className="border-[1.5px] border-gray-400 border-opacity-60 rounded-lg py-2 outline-none focus:border-amber-500 focus:ring-1 flex-grow ring-amber-500 transition-shadow duration-300 px-2"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label
          htmlFor="description"
          className="font-semibold text-slate-500 select-none"
        >
          상품 설명
        </label>
        <textarea
          id="description"
          rows={3}
          className="border-[1.5px] border-gray-400 border-opacity-60 rounded-lg py-2 outline-none focus:border-amber-500 focus:ring-1 flex-grow ring-amber-500 transition-shadow duration-300 px-2"
        />
      </div>
      <button className="bg-yellow-500 text-stone-100 text-sm font-semibold py-2 rounded-lg border-[1px] shadow-md hover:bg-yellow-600">
        상품 올리기
      </button>
    </div>
  );
};

export default Upload;
