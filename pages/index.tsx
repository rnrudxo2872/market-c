import type { NextPage } from "next";
import HomeItem from "@components/item";
import LaunchButton from "@components/launcherButton";
import Layout from "@components/layout";
import BaseTitle from "@components/title";
import useSWR from "swr";

interface IGetProducts {
  ok: boolean;
  products: [
    {
      id: number;
      name: string;
      price: string;
      userName: string;
      likes: number;
    }
  ];
}

const Home: NextPage = () => {
  const { data, error } = useSWR<IGetProducts>("/api/products");

  return (
    <Layout hasTabBar={true} title={<BaseTitle title="홈" />}>
      {data
        ? data.products.map(({ id, name, userName, price, likes }) => (
            <HomeItem
              key={id}
              id={id + ""}
              hearts={likes}
              price={price}
              seller={userName}
              title={name}
            />
          ))
        : "loading..."}
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
