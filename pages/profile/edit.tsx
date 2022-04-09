import BaseBtn from "@components/baseBtn";
import Layout from "@components/layout";
import { NextPage } from "next";

const Edit: NextPage = () => {
  return (
    <Layout hasBackBtn>
      <div className="pt-10 space-y-5">
        <section className="flex justify-center">
          <div className="aspect-square w-24 bg-slate-400 rounded-full relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 absolute bottom-0.5 right-1 border border-gray-300 rounded-full bg-white text-gray-600 p-[0.1rem]"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </section>
        <section>
          <form className="space-y-4 flex flex-col">
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="font-semibold text-slate-500 select-none"
              >
                Email address
              </label>
              <input
                id="email"
                type="email"
                className="border-[1.5px] border-gray-400 border-opacity-60 rounded-lg py-2 outline-none focus:border-amber-500 focus:ring-1 ring-amber-500 transition-shadow duration-300 px-2"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="phone"
                className="font-semibold text-slate-500 select-none"
              >
                Phone number
              </label>
              <div className="flex flex-row-reverse">
                <input
                  id="phone"
                  type="number"
                  className="appearance-none border-[1.5px] border-gray-400 border-opacity-60 rounded-lg rounded-l-none py-2 outline-none focus:border-amber-500 focus:ring-1 flex-grow peer ring-amber-500 transition-shadow duration-300 px-2"
                />
                <div className="bg-slate-200 flex items-center border border-gray-400 border-r-0 rounded-l-md peer-focus:ring-1 peer-focus:border-amber-500 ring-amber-500 transition-shadow duration-300">
                  <span className="text-slate-500 font-semibold px-1">+82</span>
                </div>
              </div>
            </div>
            <BaseBtn OnClick={() => {}}>완료</BaseBtn>
          </form>
        </section>
      </div>
    </Layout>
  );
};

export default Edit;
