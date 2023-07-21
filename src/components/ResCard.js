import React from "react";
import ReactDOM from "react-dom/client";
import { CDN_URL } from "../utils/constants";
const ResCard = (props) => {
  const { ResData } = props; // destrucring data
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    slaString,
    costForTwoString,
  } = ResData?.data;
  return (
    <>
      <div className="p-4 mx-4 my-2 w-[200px] h-[350px] shadow shadow-zinc-900 border border-solid  border-gray-50 hover:border hover:border-solid hover:border-cyan-100 bg-gray-100  hover:bg-gray-200">
        <img className="rounded-lg" src={CDN_URL + cloudinaryImageId} />
        <h3 className="font-bold py-2">{name}</h3>
        <div>{cuisines.join(", ")}</div>
        <div className="py-1">{avgRating}</div>

        <div>{slaString}</div>
        <div className="py-1">{costForTwoString}</div>
      </div>
    </>
  );
};

export default ResCard;
