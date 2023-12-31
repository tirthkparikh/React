import React from "react";
import ReactDOM from "react-dom/client";
import { CDN_URL } from "../utils/constants";
import userLoggedI from "../utils/userContext";
import { useContext } from "react";
const ResCard = (props) => {
  const { ResData } = props; // destrucring data
  const { userLoggedIn } = useContext(userLoggedI);
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    slaString,
    costForTwoString,
    promoted,
  } = ResData?.data;
  return (
    <>
      <div className="p-4 mx-4 my-2 w-[200px] h-[380px] shadow shadow-zinc-900 border border-solid  border-gray-50 hover:border hover:border-solid hover:border-cyan-100 bg-gray-100  hover:bg-gray-200">
        <img className="rounded-lg" src={CDN_URL + cloudinaryImageId} />
        <h3 className="font-bold py-2">{name}</h3>
        <div>{cuisines.join(", ")}</div>
        <div className="py-1">{avgRating}</div>

        <div>{slaString}</div>
        <div className="py-1">{costForTwoString}</div>
        <div className="py-1">{userLoggedIn}</div>
      </div>
    </>
  );
};
const ResCardPromoted = (ResCard) => {
  return (props) => {
    return (
      <div>
        <div>
          <label className="absolute bg-black text-white rounded-lg m-2 p-2 ">
            Promoted
          </label>
        </div>

        <ResCard {...props} />
      </div>
    );
  };
};
export { ResCardPromoted };
export default ResCard;
