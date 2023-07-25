import React, { useEffect, useState } from "react";
import { Shimmer } from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestrauntMenu from "../utils/useRestrauntMenu.js";
import ResCategory from "./ResCategory.js";
import { useContext } from "react";
import userLoggedI from "../utils/userContext";

export const Restaurants = () => {
  const [show, Setshow] = useState(0);
  const { resId } = useParams();
  const login = useContext(userLoggedI);
  // we made a custom hook and fetch the data
  const menuData = useRestrauntMenu(resId);
  console.log(menuData);

  if (menuData === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    menuData?.data?.cards[0]?.card?.card?.info;

  const { itemCards } =
    menuData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;

  const catData =
    menuData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) => {
        return (
          c.card?.card?.["@type"] ==
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );

  return (
    <div className="text-center bg-blue-50 p-2 max-h-full">
      <p>Hello {login.userLoggedIn}</p>
      <p className="font-black m-6 text-slate-400 text-2xl ">{name}</p>
      <p className="font-bold text-slate-600 text-lg">
        {cuisines.join(", ")}-{costForTwoMessage}
      </p>
      <p className="font-bold text-slate-600 text-lg">Menu</p>
      {catData?.map((item, index) => (
        <ResCategory
          data={item?.card?.card}
          key={item.card.card.title}
          show={show == index ? true : false}
          Setshow={() => {
            Setshow(index);
          }}
          data-testid="menu"
        />
      ))}
    </div>
  );
};
