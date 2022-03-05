import type { NextPage } from "next";
import ClacResult from "../components/calcResult";
import RadioColor from "../components/radioColor/radioColor";
import UserProfile from "../components/userProfile";

//https://dribbble.com/shots/15996385-Ecommerce-elements/attachments/7835152?mode=media
const Home: NextPage = () => {
  return (
    <div className="bg-slate-300 py-28 px-60 flex flex-col space-y-5">
      <ClacResult />
      <UserProfile />
      <div className="bg-white py-9 px-36 rounded-lg shadow-xl">
        <RadioColor
          title="test1"
          colors={["indigo-400", "red-400", "sky-500"]}
        ></RadioColor>
      </div>
      <div className="bg-white py-9 px-36 rounded-lg shadow-xl"></div>
    </div>
  );
};

export default Home;
