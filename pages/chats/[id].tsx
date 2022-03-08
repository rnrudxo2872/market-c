import { NextPage } from "next";

const ChatDetail: NextPage = () => {
  return (
    <>
      <div className="px-4 py-5 space-y-6">
        <div className="flex gap-x-2">
          <div className="w-10 h-10 rounded-full bg-gray-300" />
          <section className="bg-gray-200 bg-opacity-80 rounded-2xl py-2 px-3">
            <p>안녕하세요.</p>
            <p>펄스 4 보고 연락드립니다.</p>
            <p>15만원에 가능하신가요?</p>
          </section>
          <section className="flex items-end text-xs text-gray-400">
            <span>오후 2:49</span>
          </section>
        </div>
        <div className="flex gap-x-2 flex-row-reverse">
          <section className="bg-amber-400 bg-opacity-60 rounded-2xl py-2 px-3 text-opacity-70 text-black">
            <p>아 안녕하세요!</p>
            <p>아직까지는 내릴 생각이 없어서ㅠㅠ.</p>
            <p>후에 가격 조정하면 연락 드리겠습니다.</p>
          </section>
          <section className="flex items-end text-xs text-gray-400">
            <span>오후 2:54</span>
          </section>
        </div>
        <div className="flex gap-x-2">
          <div className="w-10 h-10 rounded-full bg-gray-300" />
          <section className="bg-gray-200 bg-opacity-80 rounded-2xl py-2 px-3">
            <p>넵</p>
          </section>
          <section className="flex items-end text-xs text-gray-400">
            <span>오후 3:12</span>
          </section>
        </div>
      </div>
    </>
  );
};

export default ChatDetail;
