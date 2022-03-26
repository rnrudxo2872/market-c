import { NextPage } from "next";
import Link from "next/link";
import BaseBtn from "@components/baseBtn";
import Layout from "@components/layout";
import RelatedProduct from "@components/relatedProduct";
import { getLocalMonetUnit } from "@libs/common";
import useSWR from "swr";
import { useRouter } from "next/router";
import useMutation from "@libs/client/useMutation";
import HeartBtn from "@components/heartBtn";

interface IGetProduct {
  ok: boolean;
  product: {
    name: string;
    description: string;
    price: number;
    userName: string;
  };
  relatedProducts: {
    id: number;
    name: string;
    price: number;
  }[];
  isLike: boolean;
}

const Item: NextPage = () => {
  const {
    query: { id: pageId },
  } = useRouter();
  const { data, error } = useSWR<IGetProduct>(
    pageId ? `/api/products/${pageId}` : null
  );
  const { fetchMutation } = useMutation(`/api/products/${pageId}/like`);

  function clickLike() {
    fetchMutation({});
  }

  return (
    <Layout hasBackBtn title={"제품상세"}>
      <div className="flex flex-col px-2 mt-8">
        <section>
          <div className="h-96 bg-gray-400"></div>
        </section>
        <section>
          <div className="flex gap-2 border-b border-stone-400 py-3">
            <div className="w-10 h-10 rounded-full bg-gray-300" />
            <div className="flex flex-col leading-none">
              <span>{data?.product.userName}</span>
              <Link href={`/user/${1}`}>
                <a>
                  <span className="text-xs">View profile &rarr;</span>
                </a>
              </Link>
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold">{data?.product.name}</h1>
            <p className="text-xl font-semibold">
              {data && getLocalMonetUnit(data.product.price, "us")}
            </p>
            <span className="text-sm">{data?.product.description}</span>
          </div>
          <div className="flex py-4">
            <BaseBtn OnClick={() => console.log("")}>판매자와 대화하기</BaseBtn>
            <HeartBtn OnClick={clickLike} isOn={data?.isLike} />
          </div>
        </section>
        <section className="mt-4">
          <h2 className="font-bold text-lg">비슷한 상품</h2>
          <section className="grid grid-cols-2 gap-x-2 gap-y-4 mt-4">
            {data?.relatedProducts.map((product) => (
              <RelatedProduct
                key={product.id}
                title={product.name}
                price={product.price + ""}
              />
            ))}
          </section>
        </section>
      </div>
    </Layout>
  );
};

export default Item;
