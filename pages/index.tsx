import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div>
      <div>
        {[1, 1, 1, 1, 1].map((_, index) => (
          <div
            key={index}
            className="flex border-b items-center border-stone-300 relative"
          >
            <section className="py-3 px-2">
              <div className="w-20 h-20 rounded-md bg-slate-400"></div>
            </section>
            <section className="ml-2">
              <div className="flex flex-col leading-[0.5em]">
                <span className="font-semibold">One Item</span>
                <span className="text-gray-500 text-sm">Eric</span>
                <span className="font-bold text-lg">
                  {Number.prototype.toLocaleString.call(95, "en-US", {
                    maximumFractionDigits: 0,
                    currency: "USD",
                    style: "currency",
                  })}
                </span>
              </div>
            </section>
            <section className="absolute bottom-1 right-3 flex gap-x-2">
              <div className="flex items-center">
                <button>
                  <svg
                    className="w-4 h-4"
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
                {1}
              </div>
              <div className="flex items-center">
                <button>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    ></path>
                  </svg>
                </button>
                {1}
              </div>
            </section>
          </div>
        ))}
      </div>
      <button className="fixed bottom-2 right-3 border rounded-full bg-red-400 p-3 shadow-2xl hover:bg-red-500">
        <svg
          className="h-6 w-6 text-stone-100"
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
      </button>
    </div>
  );
};

export default Home;
