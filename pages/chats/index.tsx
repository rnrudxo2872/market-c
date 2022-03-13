import { NextPage } from "next";
import Layout from "@components/layout";
import BaseTitle from "@components/title";

const Chats: NextPage = () => {
  return (
    <Layout title={<BaseTitle title="동네생활" />} hasTabBar>
      <div className="divide-y-[1px] pt-2">
        {[1, 1, 1, 1].map((_, index) => (
          <div
            key={index}
            className="flex gap-2 pt-1 pb-2.5 px-4 items-center border-gray-400"
          >
            <div className="w-12 h-12 rounded-full bg-gray-300" />
            <div className="flex flex-col flex-grow">
              <div className="flex leading-none gap-1 items-center">
                <span className="text-sm font-bold">죠니</span>
                <div className="flex gap-1 text-xs text-gray-500">
                  <span>영등포구 도림동</span>
                  <span>•</span>
                  <span>1시간 전</span>
                </div>
              </div>
              <div>
                <p>도착하시면 앞에 박스들고 있는 사람 찾으시면 됩니다!</p>
              </div>
            </div>
            <div className="bg-gray-400 h-10 w-10"></div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Chats;
