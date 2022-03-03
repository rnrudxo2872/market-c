export default function CalcResult() {
  return (
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
  );
}
