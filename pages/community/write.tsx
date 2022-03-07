import { NextPage } from "next";

const CommunityWrite: NextPage = () => {
  return (
    <form className="px-4 py-5">
      <select name="type" className="mb-2">
        <option value="question">동네질문</option>
        <option value="news">동네소식</option>
        <option value="restaurant">동네맛집</option>
      </select>
      <textarea
        id="description"
        rows={3}
        className="border-[1.5px] border-gray-400 border-opacity-60 rounded-lg py-2 outline-none focus:border-amber-500 focus:ring-1 flex-grow ring-amber-500 transition-shadow duration-300 px-2 w-full"
      />
      <button className="bg-yellow-500 text-stone-100 text-sm font-semibold py-2 rounded-lg border-[1px] shadow-md w-full">
        글쓰기
      </button>
    </form>
  );
};

export default CommunityWrite;
