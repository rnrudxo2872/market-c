import { NextPage } from "next";
import Layout from "@components/layout";
import BaseTitle from "@components/title";
import Link from "next/link";
import Video from "@components/live/video";
import LaunchButton from "@components/launcherButton";

const Streams: NextPage = () => {
  return (
    <Layout title={<BaseTitle title="동네생활" />} hasTabBar>
      <div className="space-y-8 pt-2">
        {[1, 1, 1, 1, 1].map((_, index) => (
          <div key={index} className="space-y-2 px-1">
            <Link href={`/live/${index}`}>
              <a>
                <Video />
              </a>
            </Link>
            <section className="flex items-center gap-1.5">
              <div>
                <div className="aspect-square w-10 rounded-full bg-gray-400"></div>
              </div>
              <div className="flex flex-col">
                <Link href={`/live/${index}`}>
                  <a>
                    <span className="text-sm">
                      당근을 파는 감자입니다. 구경 해봐요!
                    </span>
                  </a>
                </Link>
                <span className="text-xs text-gray-400">쏘세니</span>
              </div>
            </section>
          </div>
        ))}
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
