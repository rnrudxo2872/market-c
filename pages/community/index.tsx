import { NextPage } from "next";
import CommunityPost from "@components/communityPost";
import Layout from "@components/layout";
import BaseTitle from "@components/title";

const Community: NextPage = () => {
  return (
    <Layout title={<BaseTitle title="동네생활" />} hasTabBar>
      {[1, 1, 1, 1, 1].map((_, index) => (
        <CommunityPost
          key={index}
          id={index + ""}
          title="조원동 근처에 고오스, 초코볼, 꼬부기 제외 포켓몬빵 어디에 파는지
        아시나요?ㅠㅜㅜ 다른맛 궁금해여"
          comment={2}
          like={1}
          local="조원동"
          publishedAt="28분 전"
          type="동네질문"
          user="쿼카조아"
        />
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
