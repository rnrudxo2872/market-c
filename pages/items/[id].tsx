import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

const Item: NextPage = () => {
  const router = useRouter();
  const itemId = router.query.id;

  return (
    <div className="flex flex-col px-2 mt-8">
      <section>
        <div className="h-96 bg-gray-400"></div>
      </section>
      <section>
        <div className="flex gap-2 border-b border-stone-400 py-3">
          <div className="w-10 h-10 rounded-full bg-gray-300" />
          <div className="flex flex-col leading-none">
            <span>Mike Job</span>
            <Link href={`/user/${1}`}>
              <a>
                <span className="text-xs">View profile &rarr;</span>
              </a>
            </Link>
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-bold">iPhone</h1>
          <p className="text-xl font-semibold">
            {Number.prototype.toLocaleString.call(140, "en-US", {
              currency: "USD",
              style: "currency",
              maximumFractionDigits: 0,
            })}
          </p>
          <span className="text-sm">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy.
          </span>
        </div>
        <div className="flex py-4">
          <button className="flex-1 bg-amber-400 text-stone-600 font-semibold text-sm py-2 rounded-md hover:bg-amber-500 hover:bg-opacity-80">
            판매자와 대화하기
          </button>
          <button className="px-4">
            <svg
              className="w-5 h-5 text-stone-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
          </button>
        </div>
      </section>
      <section className="mt-4">
        <h2 className="font-bold text-lg">비슷한 상품</h2>
        <section className="grid grid-cols-2 gap-x-2 gap-y-4 mt-4">
          {[1, 1, 1, 1, 1].map((_, index) => (
            <div key={index} className="">
              <section>
                <div className="h-32 bg-slate-400" />
              </section>
              <section className="flex flex-col leading-none pt-2">
                <span>Ultra Galaxy 20</span>
                <span className="text-sm font-semibold">
                  {Number.prototype.toLocaleString.call(12, "en-US", {
                    currency: "USD",
                    style: "currency",
                    maximumFractionDigits: 0,
                  })}
                </span>
              </section>
            </div>
          ))}
        </section>
      </section>
    </div>
  );
};

export default Item;
