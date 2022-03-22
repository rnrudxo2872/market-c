import type { NextPage } from "next";
import { Item } from "@components/item";
import LaunchButton from "@components/launcherButton";
import Layout from "@components/layout";
import BaseTitle from "@components/title";
import useUser from "@libs/client/useUser";

const Home: NextPage = () => {
  const user = useUser();

  return (
    <Layout hasTabBar={true} title={<BaseTitle title="홈" />}>
      {[1, 1, 1, 1, 1].map((_, index) => (
        <Item
          key={index}
          id={index + ""}
          comments={1}
          hearts={1}
          price={140 + ""}
          seller="Eric"
          title="Galaxy S222"
        />
      ))}
      <LaunchButton href="/products/upload">
        <svg
          className="w-8 h-8 text-stone-100"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      </LaunchButton>
    </Layout>
  );
};

export default Home;
