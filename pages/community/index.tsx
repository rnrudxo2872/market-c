import { NextPage } from "next";
import CommunityPost from "@components/communityPost";
import Layout from "@components/layout";
import BaseTitle from "@components/title";
import LaunchButton from "@components/launcherButton";
import useCoord from "@libs/client/useCoord";
import { useState } from "react";
import InfiniteScroll from "@components/infiniteScroll";

interface IPost {
  id: number;
  content: string;
  userName: string;
  answers: number;
  wonders: number;
}

const Community: NextPage = () => {
  const { latitude, longitude, loading } = useCoord();
  const [posts, setPosts] = useState<IPost[]>([]);

  return (
    <Layout title={<BaseTitle title="동네생활" />} hasTabBar>
      {posts.map(({ id, content, userName, wonders, answers }) => (
        <CommunityPost
          key={id}
          id={id.toString()}
          title={content}
          comment={answers}
          like={wonders}
          local="조원동"
          publishedAt="28분 전"
          type="동네질문"
          user={userName}
        />
      ))}
      <InfiniteScroll
        url={loading ? null : "/api/community"}
        setState={setPosts}
        urlQuery={loading ? undefined : { latitude, longitude }}
      />
      <LaunchButton href="/community/write">
        <svg
          className="w-8 h-8 fill-white text-amber-500 group-hover:text-red-500"
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
      </LaunchButton>
    </Layout>
  );
};

export default Community;
