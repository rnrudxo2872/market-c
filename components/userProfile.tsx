export default function UserProfile() {
  return (
    <div className="bg-white overflow-hidden rounded-3xl shadow-xl flex flex-col h-60 w-96">
      <div className="pt-10 pb-14 bg-sky-500 px-7 flex justify-between shadow-2xl">
        <span className="font-bold text-white">Profile</span>
        <span></span>
      </div>
      <div className="bg-white -mt-7 rounded-t-3xl w-full h-full px-7 flex justify-between">
        <div className="flex flex-col mt-2">
          <span className="text-slate-400">Order</span>
          <span className="font-bold">340</span>
        </div>
        <div className="-mt-7 flex flex-col space-y-3">
          <div className="rounded-full bg-slate-400 w-14 h-14 mx-auto"></div>
          <div className="flex flex-col align-middle text-center">
            <span>Tony Molly</span>
            <span className="text-slate-400">New York, USA</span>
          </div>
        </div>
        <div className="flex flex-col mt-2">
          <span className="text-slate-400">Spent</span>
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
  );
}
