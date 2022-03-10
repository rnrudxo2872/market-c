import { NextPage } from "next";

const StreamDetail: NextPage = () => {
  return (
    <div className="space-y-2 flex flex-col">
      <section className="space-y-2">
        <section className="aspect-video bg-gray-400"></section>
        <section className="flex items-center gap-1.5 px-3">
          <div>
            <div className="aspect-square w-10 rounded-full bg-gray-400"></div>
          </div>
          <div className="flex flex-col">
            <span className="text-sm">
              당근을 파는 감자입니다. 구경 해봐요!
            </span>
            <span className="text-xs text-gray-400">쏘세니</span>
          </div>
        </section>
      </section>
      <section className="px-4 pt-5 space-y-6 h-[calc(100vh-calc(100vw/calc(16/9)+calc(7.25rem)))] overflow-scroll">
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
        <div className="flex gap-x-2">
          <section className="flex flex-col items-start">
            <div className="w-10 h-10 rounded-full bg-gray-300" />
          </section>
          <section className="bg-gray-200 bg-opacity-80 rounded-2xl py-2 px-3 text-sm">
            <section className="inline-flex mr-2">
              <span className="font-semibold">제임구리</span>
            </section>
            <span>마지막 말풍선 입니다.</span>
          </section>
          <section className="flex items-end text-xs text-gray-400">
            <span>오후 2:49</span>
          </section>
        </div>
      </section>
      <section className="w-full">
        <form className="relative px-12 py-1 bg-[#DADDE2]">
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
          <button className="absolute right-[3.22rem] bottom-0 top-0 my-auto fill-gray-500 hover:fill-amber-500 focus:fill-amber-500 transition-colors">
            <svg
              className="w-9 h-9 p-1 pl-1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.2493 10.0004C10.2493 9.31048 9.69001 8.75115 9.00005 8.75115C8.31008 8.75115 7.75076 9.31048 7.75076 10.0004C7.75076 10.6904 8.31008 11.2497 9.00005 11.2497C9.69001 11.2497 10.2493 10.6904 10.2493 10.0004ZM16.2493 10.0004C16.2493 9.31048 15.69 8.75115 15 8.75115C14.3101 8.75115 13.7508 9.31048 13.7508 10.0004C13.7508 10.6904 14.3101 11.2497 15 11.2497C15.69 11.2497 16.2493 10.6904 16.2493 10.0004ZM10.1356 15.107C9.78037 14.8938 9.31967 15.009 9.10656 15.3642C8.89345 15.7194 9.00862 16.1801 9.36381 16.3932C10.1306 16.8533 11.0841 17.0626 11.9997 17.0626C12.9152 17.0626 13.8687 16.8534 14.6355 16.3934C14.9907 16.1803 15.1059 15.7196 14.8928 15.3644C14.6798 15.0092 14.2191 14.894 13.8639 15.1071C13.3807 15.3969 12.7091 15.5626 11.9997 15.5626C11.2903 15.5626 10.6187 15.3969 10.1356 15.107ZM22.0011 12.0005C22.0011 6.47681 17.5233 1.99896 11.9996 1.99896C6.47589 1.99896 1.99805 6.47681 1.99805 12.0005C1.99805 17.5242 6.47589 22.0021 11.9996 22.0021C17.5233 22.0021 22.0011 17.5242 22.0011 12.0005ZM3.49805 12.0005C3.49805 7.30524 7.30432 3.49896 11.9996 3.49896C16.6949 3.49896 20.5011 7.30524 20.5011 12.0005C20.5011 16.6958 16.6949 20.5021 11.9996 20.5021C7.30432 20.5021 3.49805 16.6958 3.49805 12.0005Z" />
            </svg>
          </button>
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
      </section>
    </div>
  );
};

export default StreamDetail;
