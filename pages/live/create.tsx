import { NextPage } from "next";

const CreateStream: NextPage = () => {
  return (
    <div className="px-4 space-y-4 pt-8">
      <div className="flex flex-col gap-y-2">
        <label
          htmlFor="title"
          className="font-semibold text-slate-500 select-none"
        >
          스트리밍 제목
        </label>
        <input
          id="title"
          type="email"
          className="border-[1.5px] border-gray-400 border-opacity-60 rounded-lg py-2 outline-none focus:border-amber-500 focus:ring-1 ring-amber-500 transition-shadow duration-300 px-2"
        />
      </div>
      <div className="flex flex-col gap-y-2">
        <label
          htmlFor="price"
          className="font-semibold text-slate-500 select-none"
        >
          가격
        </label>
        <div className="relative">
          <span className="absolute left-2 bottom-0 top-0 my-auto inline-flex items-center text-lg">
            {"$"}
          </span>
          <span className="absolute right-2 bottom-0 top-0 my-auto inline-flex items-center text-lg text-gray-400 select-none">
            {"USD"}
          </span>
          <input
            id="price"
            type="number"
            placeholder="0.00"
            className="w-full appearance-none border-[1.5px] border-gray-400 border-opacity-60 rounded-lg py-2 outline-none focus:border-amber-500 focus:ring-1 ring-amber-500 transition-shadow duration-300 pl-5"
          />
        </div>
      </div>
      <div className="flex flex-col gap-y-2">
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
      <button className="bg-yellow-500 text-stone-100 text-sm font-semibold py-2 rounded-lg border-[1px] shadow-md hover:bg-yellow-600 w-full">
        방송 시작하기
      </button>
    </div>
  );
};

export default CreateStream;
