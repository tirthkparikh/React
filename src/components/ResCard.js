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
      <div className="res-card">
        <img src={CDN_URL + cloudinaryImageId} />
        <h3 className="Res-name">{name}</h3>
        <div className="Res-cusine">{cuisines.join(", ")}</div>
        <div className="Res-rating">{avgRating}</div>

        <div className="Res-time">{slaString}</div>
        <div className="Res-cost">{costForTwoString}</div>
      </div>
    </>
  );
};

export default ResCard;
