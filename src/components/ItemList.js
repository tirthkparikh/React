import React from "react";
import { MENU_IMG } from "../utils/constants";
export default function ItemList(props) {
  return (
    <div>
      {props.data?.map((item) => (
        <div
          className="flex justify-between p-3 m-2 mb-12 border-b-[2px] h-120 border-black"
          key={item.card.info.id}
        >
          <div className="flex flex-col justify-between  text-left w-9/12 ">
            <div className="p-2">
              <span>{item.card.info.name}</span>
              <span>
                -₹
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="p-2 font-light text-xs text-slate-400">
              {item.card.info.description}
            </p>
          </div>
          <div className="w-3/12 p-4 align-middle text-center relative">
            <img
              className="relative"
              src={MENU_IMG + item.card.info.imageId}
            ></img>
            <div className="absolute rounded-lg bottom-4 bg-opacity-50 bg-green-300 px-4  ml-5  shadow-lg">
              <button>Add +</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
