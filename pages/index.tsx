import type { NextPage } from "next";

//https://dribbble.com/shots/15996385-Ecommerce-elements/attachments/7835152?mode=media
const Home: NextPage = () => {
  return (
    <div className="bg-slate-300 py-28 px-60 flex flex-col space-y-5">
      <div className="bg-white py-9 px-10 rounded-3xl shadow-xl">
        <div className="space-y-2">
          <div className="space-y-1">
            <span className="font-extrabold text-2xl">Select Item</span>
            <div className="flex justify-between">
              <span className="text-neutral-400">Grey Chair</span>
              <span className="font-bold">$170</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-400">Tooly Table</span>
              <span className="font-bold">$800</span>
            </div>
          </div>
          <div className="border-t-2 border-dashed">
            <div className="flex justify-between my-2">
              <span className="font-bold">Total</span>
              <span className="font-bold">$970</span>
            </div>
          </div>
          <div className="text-center bg-sky-400 rounded-2xl py-2 w-1/2 mx-auto cursor-pointer">
            <span className="font-extrabold text-xl text-stone-100">
              Checkout
            </span>
          </div>
        </div>
      </div>
      <div className="bg-white overflow-hidden rounded-3xl shadow-xl flex flex-col h-60 w-96">
        <div className="pt-10 pb-14 bg-sky-400 px-7 flex justify-between">
          <span>Profile</span>
          <span></span>
        </div>
        <div className="bg-white -mt-7 rounded-t-3xl w-full h-full px-7 flex justify-between">
          <div className="flex flex-col mt-2">
            <span>Order</span>
            <span className="font-bold">340</span>
          </div>
          <div className="-mt-7 flex flex-col space-y-3">
            <div className="rounded-full bg-slate-400 w-14 h-14 mx-auto"></div>
            <div className="flex flex-col align-middle text-center">
              <span>Tony Molly</span>
              <span>New York, USA</span>
            </div>
          </div>
          <div className="flex flex-col mt-2">
            <span>Spent</span>
            <span className="font-bold">
              {Number.prototype.toLocaleString.call(2310, "en-US", {
                style: "currency",
                currency: "USD",
                maximumFractionDigits: 0,
              })}
            </span>
          </div>
        </div>
      </div>
      <div className="bg-white py-9 px-36 rounded-lg shadow-xl"></div>
      <div className="bg-white py-9 px-36 rounded-lg shadow-xl"></div>
      <div className="bg-white py-9 px-36 rounded-lg shadow-xl"></div>
    </div>
  );
};

export default Home;
