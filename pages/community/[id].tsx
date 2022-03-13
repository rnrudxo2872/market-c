import { NextPage } from "next";
import BaseBtn from "@components/baseBtn";
import PostStat from "@components/communityPost/postStat";
import Layout from "@components/layout";
import PostUser from "@components/profile/postUser";

const CommunityPostDetail: NextPage = () => {
  return (
    <Layout hasBackBtn>
      <div className="pt-5">
        <section className="flex flex-col">
          <div className="flex mb-2 ">
            <span className="bg-slate-200 px-1 py-[0.15rem] rounded-md text-xs">
              동네질문
            </span>
          </div>
          <div>
            <div className="border-b border-stone-400">
              <PostUser
                name="Mike Job"
                option={
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
                }
              />
            </div>
          </div>
        </section>
        <article className="py-4 space-y-6 border-b border-gray-300">
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
        <section className="border-b border-gray-300">
          <PostStat comment={2} like={1} />
        </section>
        <section className="pt-3.5">
          {[1, 1, 1, 1].map((_, index) => (
            <div key={index}>
              <div className="flex gap-2 pb-6 ">
                <PostUser
                  name="죠니"
                  option={
                    <div className="flex flex-col leading-none">
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
                  }
                />
              </div>
            </div>
          ))}
        </section>
        <section className="flex flex-col gap-2 pb-4 ">
          <textarea
            id="description"
            rows={3}
            className="border-[1.5px] border-gray-400 border-opacity-60 rounded-lg py-2 outline-none focus:border-amber-500 focus:ring-1 flex-grow ring-amber-500 transition-shadow duration-300 px-2"
          />
          <BaseBtn OnClick={() => console.log("")}> 댓글 쓰기</BaseBtn>
        </section>
      </div>
    </Layout>
  );
};

export default CommunityPostDetail;
