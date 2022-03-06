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
          colors={[
            {
              color: "yellow-400",
              bgColor: `bg-yellow-400`,
              ringColor: `ring-yellow-400`,
            },
            {
              color: "blue-400",
              bgColor: "bg-blue-400",
              ringColor: "ring-blue-400",
            },
            {
              color: "slate-400",
              bgColor: "bg-slate-400",
              ringColor: "ring-slate-400",
            },
            {
              color: "blck",
              bgColor: `bg-black`,
              ringColor: `ring-black`,
            },
            {
              color: "indigo-400",
              bgColor: "bg-indigo-400",
              ringColor: "ring-indigo-400",
            },
            {
              color: "red-400",
              bgColor: "bg-red-400",
              ringColor: "ring-red-400",
            },
          ]}
          clickColorHandler={(cle) => {
            console.log(cle);
          }}
        ></RadioColor>
      </div>
      <div className="bg-white py-9 px-36 rounded-lg shadow-xl"></div>
      <div className="bg-white py-9 px-36 rounded-lg shadow-xl"></div>
      <div className="bg-white py-9 px-36 rounded-lg shadow-xl"></div>
    </div>
  );
};

export default Home;
