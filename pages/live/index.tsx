import { NextPage } from "next";
import Layout from "@components/layout";
import BaseTitle from "@components/title";
import LaunchButton from "@components/launcherButton";
import { useState } from "react";
import LiveElement from "@components/live/liveElement";
import InfiniteScroll from "@components/infiniteScroll";

interface ILiveData {
  id: number;
  title: string;
  createAt: string;
  userName: string;
}

interface IResLiveData {
  ok: boolean;
  error?: string;
  liveList?: ILiveData[];
}

const Streams: NextPage = () => {
  const [live, setLive] = useState<ILiveData[]>([]);

  return (
    <Layout title={<BaseTitle title="동네생활" />} hasTabBar>
      <div className="space-y-8 pt-2">
        {live.map(({ id, title, userName, createAt }, index) => (
          <LiveElement
            key={`${id}/${index}`}
            title={title}
            userName={userName}
            linkId={id}
          />
        ))}
        <InfiniteScroll url="/api/live" setState={setLive} />
        <LaunchButton href="/live/create">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 text-stone-100"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
          </svg>
        </LaunchButton>
      </div>
    </Layout>
  );
};

export default Streams;
