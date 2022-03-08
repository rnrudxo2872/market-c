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
      <div className="fixed bottom-0 w-full">
        <form className="relative px-12 py-1 bg-gray-300 bg-opacity-80">
          <button
            type="button"
            className="absolute left-2 bottom-0 top-0 my-auto fill-gray-400 hover:fill-amber-500 focus:fill-amber-500 transition-colors"
          >
            <svg
              className="w-9 h-9  p-1 pl-1.5"
              id="Layer_1"
              version="1.1"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M28,14H18V4c0-1.104-0.896-2-2-2s-2,0.896-2,2v10H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h10v10c0,1.104,0.896,2,2,2  s2-0.896,2-2V18h10c1.104,0,2-0.896,2-2S29.104,14,28,14z" />
            </svg>
          </button>
          <input
            id="inputBox"
            type="text"
            className="border-[1.5px] border-gray-400 border-opacity-60 rounded-2xl py-2 outline-none focus:border-amber-500 focus:ring-1 flex-grow peer ring-amber-500 transition-shadow duration-300 px-2 w-full"
            required
          />
          <button className="absolute right-2 bottom-0 top-0 my-auto fill-gray-400 peer-valid:fill-amber-500 transition-colors ">
            <svg
              viewBox="0 0 256 256"
              xmlns="http://www.w3.org/2000/svg"
              className="w-9 h-9  p-1 pl-1.5"
            >
              <rect fill="none" height="256" width="256" />
              <path d="M223.4,114,54.9,19.7a16.3,16.3,0,0,0-18.2,1.2,15.9,15.9,0,0,0-5.1,17.9l28.1,78.5a4.1,4.1,0,0,0,3.8,2.7h72.2a8.2,8.2,0,0,1,8.3,7.5,8,8,0,0,1-8,8.5H63.5a4.1,4.1,0,0,0-3.8,2.7L31.6,217.2a16.1,16.1,0,0,0,15.1,21.4,16.5,16.5,0,0,0,7.8-2L223.4,142a16.1,16.1,0,0,0,0-28Z" />
            </svg>
          </button>
        </form>
      </div>
    </>
  );
};

export default ChatDetail;
