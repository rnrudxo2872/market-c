import { NextPage } from "next";
import { useState } from "react";
import BaseBtn from "../components/baseBtn";
import Input from "../components/input";
import { joinClasses } from "../libs/common";

const Enter: NextPage = () => {
  const [path, setPath] = useState<"email" | "phone">("email");
  const onEmail = () => setPath("email");
  const onPhone = () => setPath("phone");

  function togglePath(pred: () => boolean) {
    if (pred()) {
      return "border-b-[3px] border-b-yellow-400 text-yellow-500";
    }
    return "border-b-[1px] border-b-gray-200 text-gray-400";
  }

  return (
    <div className="mt-12 px-16">
      <div className="flex justify-center pb-4">
        <h1 className="font-extrabold text-2xl">Enter to Potato</h1>
      </div>
      <div className="flex flex-col mb-6">
        <div className="mx-auto mb-6">
          <span className="font-bold text-gray-600 text-opacity-70 text-sm">
            Enter using:
          </span>
        </div>
        <div className="flex">
          <button
            onClick={() => onEmail()}
            className={joinClasses(
              "w-1/2 font-semibold transition-colors",
              togglePath(() => path === "email")
            )}
          >
            Email
          </button>
          <button
            onClick={() => onPhone()}
            className={joinClasses(
              "w-1/2 font-semibold transition-colors",
              togglePath(() => path === "phone")
            )}
          >
            Phone
          </button>
        </div>
        <div className="space-y-2 mt-8">
          <div>
            <label
              htmlFor="inputBox"
              className="font-semibold text-slate-500 select-none"
            >
              {path === "email" ? "Email address" : "Phone number"}
            </label>
          </div>
          <form className="flex flex-col space-y-4">
            {path === "email" ? (
              <Input id="inputBox" type="email" />
            ) : (
              <Input type="phone" />
            )}
            <BaseBtn OnClick={() => console.log("ss")}>
              {path === "email" ? "Get login link" : "Get one-time password"}
            </BaseBtn>
          </form>
        </div>
      </div>
      <div>
        <div className="flex items-center gap-1">
          <div className="border-b-[1px] border-stone-400 flex-grow"></div>
          <div>
            <span className="text-stone-400 font-semibold text-sm">
              Or enter with
            </span>
          </div>
          <div className="border-b-[1px] border-stone-400 flex-grow"></div>
        </div>
        <div className="grid grid-cols-2 gap-y-3 gap-x-4 mt-6">
          <button className="border-[1px] border-stone-400 rounded-md py-2 shadow-md">
            <svg
              className="w-5 h-5 mx-auto"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
            </svg>
          </button>
          <button className="border-[1px] border-stone-400 rounded-md py-2 shadow-md">
            <svg
              className="w-5 h-5 mx-auto"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button className="border-[1px] border-stone-400 rounded-md py-2 shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 208 191.94"
              className="w-5 h-5 mx-auto"
            >
              <g>
                <polygon points="76.01 89.49 87.99 89.49 87.99 89.49 82 72.47 76.01 89.49" />
                <path d="M104,0C46.56,0,0,36.71,0,82c0,29.28,19.47,55,48.75,69.48-1.59,5.49-10.24,35.34-10.58,37.69,0,0-.21,1.76.93,2.43a3.14,3.14,0,0,0,2.48.15c3.28-.46,38-24.81,44-29A131.56,131.56,0,0,0,104,164c57.44,0,104-36.71,104-82S161.44,0,104,0ZM52.53,69.27c-.13,11.6.1,23.8-.09,35.22-.06,3.65-2.16,4.74-5,5.78a1.88,1.88,0,0,1-1,.07c-3.25-.64-5.84-1.8-5.92-5.84-.23-11.41.07-23.63-.09-35.23-2.75-.11-6.67.11-9.22,0-3.54-.23-6-2.48-5.85-5.83s1.94-5.76,5.91-5.82c9.38-.14,21-.14,30.38,0,4,.06,5.78,2.48,5.9,5.82s-2.3,5.6-5.83,5.83C59.2,69.38,55.29,69.16,52.53,69.27Zm50.4,40.45a9.24,9.24,0,0,1-3.82.83c-2.5,0-4.41-1-5-2.65l-3-7.78H72.85l-3,7.78c-.58,1.63-2.49,2.65-5,2.65a9.16,9.16,0,0,1-3.81-.83c-1.66-.76-3.25-2.86-1.43-8.52L74,63.42a9,9,0,0,1,8-5.92,9.07,9.07,0,0,1,8,5.93l14.34,37.76C106.17,106.86,104.58,109,102.93,109.72Zm30.32,0H114a5.64,5.64,0,0,1-5.75-5.5V63.5a6.13,6.13,0,0,1,12.25,0V98.75h12.75a5.51,5.51,0,1,1,0,11Zm47-4.52A6,6,0,0,1,169.49,108L155.42,89.37l-2.08,2.08v13.09a6,6,0,0,1-12,0v-41a6,6,0,0,1,12,0V76.4l16.74-16.74a4.64,4.64,0,0,1,3.33-1.34,6.08,6.08,0,0,1,5.9,5.58A4.7,4.7,0,0,1,178,67.55L164.3,81.22l14.77,19.57A6,6,0,0,1,180.22,105.23Z" />
              </g>
            </svg>
          </button>
          <button className="border-[1px] border-stone-400 rounded-md py-2 shadow-md">
            <svg
              className="w-5 h-5 mx-auto"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
            >
              <g id="soc020">
                <g id="Regular-10" data-name="Regular">
                  <g id="layer1">
                    <path
                      id="path2830"
                      d="M3.2,4.632,3.128,27.3l8.912.036.036-9.167L11.489,15.3,19.924,27.3l8.948.073L28.835,4.705l-8.948-.036.183,9.351.587,3.337L12.076,4.669,3.2,4.632Z"
                    />
                  </g>
                </g>
              </g>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Enter;
