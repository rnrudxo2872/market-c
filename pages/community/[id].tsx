import { NextPage } from "next";
import Link from "next/link";

const CommunityPostDetail: NextPage = () => {
  return (
    <div className="pt-5">
      <section className="flex flex-col">
        <div className="flex mb-2 px-4">
          <span className="bg-slate-200 px-1 py-[0.15rem] rounded-md text-xs">
            동네질문
          </span>
        </div>
        <div>
          <div className="flex gap-2 border-b border-stone-400 pb-3 px-4">
            <div className="w-10 h-10 rounded-full bg-gray-300" />
            <div className="flex flex-col leading-none">
              <span className="text-sm">Mike Job</span>
              <div className="flex gap-1 text-xs text-gray-500">
                <div>
                  <span>영등포구 도림동</span>
                  <span>인증 {6}회</span>
                </div>
                <span>•</span>
                <div>
                  <span>1시간 전</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <article className="p-4 space-y-6 border-b border-gray-300 pb-3">
        <section>
          <p>혹시 신도림 근처에 테니스 배울만한 곳 있을까요?</p>
        </section>
        <section className="flex items-center gap-1 text-xs text-gray-500 fill-gray-500">
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <g data-name="Layer 2" id="Layer_2">
              <path d="M21,16H20V10A8,8,0,0,0,4,10v6H3a1,1,0,0,0-1,1v4a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V17A1,1,0,0,0,21,16ZM12,6V8a2,2,0,0,0-2,2H8A4,4,0,0,1,12,6Zm8,14H4V18H20Z" />
            </g>
          </svg>
          <span className="underline">
            부적절한 게시글이라면 감자마켓에 알려주세요.
          </span>
        </section>
      </article>
      <section className="flex gap-4 items-center px-4 border-b border-gray-300">
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
          <span className="text-sm">답변</span>
          <span className="text-sm">{2}</span>
        </div>
      </section>
      <section className="pt-3.5">
        {[1, 1, 1, 1].map((_, index) => (
          <div key={index}>
            <div className="flex gap-2 pb-6 px-4">
              <div className="w-10 h-10 rounded-full bg-gray-300" />
              <div className="flex flex-col leading-none">
                <span className="text-sm">죠니</span>
                <div className="flex gap-1 text-xs text-gray-500 pb-1">
                  <span>영등포구 도림동</span>
                  <span>•</span>
                  <span>1시간 전</span>
                </div>
                <p>
                  도림천역에 신도림테니스장에서
                  레슨하더라구요(구로구시설관리공단에 문의해보세요)
                </p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default CommunityPostDetail;
