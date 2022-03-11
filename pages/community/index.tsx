import { NextPage } from "next";
import Layout from "../../components/layout";
import BaseTitle from "../../components/title";

const Community: NextPage = () => {
  return (
    <Layout title={<BaseTitle title="동네생활" />} hasTabBar>
      {[1, 1, 1, 1, 1].map((_, index) => (
        <div
          key={index}
          className="flex flex-col border-b-4 border-gray-300 pt-4"
        >
          <section className="border-b border-gray-300 pb-2">
            <div className="flex mb-2 px-4">
              <span className="bg-slate-200 px-1 py-[0.15rem] rounded-md text-xs">
                동네질문
              </span>
            </div>
            <div className="mb-6 flex gap-x-1 px-4">
              <span className="tracking-widest text-amber-600 text-opacity-80">
                Q.
              </span>
              <span className="">
                조원동 근처에 고오스, 초코볼, 꼬부기 제외 포켓몬빵 어디에 파는지
                아시나요?ㅠㅜㅜ 다른맛 궁금해여
              </span>
            </div>
            <div className="flex justify-between px-4">
              <div className="flex gap-1 text-sm text-gray-500">
                <span>쿼카조아</span>
                <span>•</span>
                <span>조원동</span>
              </div>
              <div>
                <span className="text-xs text-gray-500">28분 전</span>
              </div>
            </div>
          </section>
          <section className="flex gap-4 items-center px-4">
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
              <span className="text-sm">{1}</span>
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
              <span className="text-sm">답변하기</span>
              <span className="text-sm">{2}</span>
            </div>
          </section>
        </div>
      ))}
      <button className="fixed bottom-24 right-5 rounded-full bg-amber-500 text-amber-500 p-3">
        <svg
          className="w-8 h-8 fill-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
          ></path>
        </svg>
      </button>
    </Layout>
  );
};

export default Community;
