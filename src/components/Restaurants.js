import React, { useEffect, useState } from "react";
import ShimmerMenu from "./shimmerMenu.js";
import { useParams } from "react-router-dom";
import useRestrauntMenu from "../utils/useRestrauntMenu.js";
import { MENU_IMG } from "../utils/constants.js";
import Card from "./MenuCards.js";

export const Restaurants = () => {
  const { resId } = useParams();

  // we made a custom hook and fetch the data
  const menuData = useRestrauntMenu(resId);

  if (menuData === null) return <ShimmerMenu />;

  const { name, cuisines, costForTwoMessage } =
    menuData?.data?.cards[0]?.card?.card?.info;

  const { itemCards } =
    menuData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;

  return (
    <div class="menu">
      <h1>{name}</h1>
      <h4>
        {cuisines.join(", ")}-{costForTwoMessage}
      </h4>
      <h2>Menu</h2>
      <div className="flex flex-wrap">
        {itemCards.map((item) => (
          <Card
            key={item.card.info.id}
            image={MENU_IMG + item.card.info.imageId}
            name={item.card.info.name}
            price={
              item.card.info.price / 100 || item.card.info.defaultPrice / 100
            }
          />
        ))}
      </div>
    </div>
  );
};
