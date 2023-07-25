import React, { useState } from "react";
import ItemList from "./ItemList";

export default function ResCategory({ show, Setshow, data }) {
  const handleClick = (e) => {
    Setshow();
  };

  return (
    <>
      <div
        data-testid="menu"
        className="w-6/12 h-35 my-4 mx-auto text-center bg-gray-50 shadow-lg p-4 max-h-min"
      >
        <div
          className="flex justify-between cursor-pointer align-text-bottom text-center"
          onClick={handleClick}
        >
          <div className="font-bold">
            {data.title}({data.itemCards.length})
          </div>
          <div>⬇️</div>
        </div>
        {show && <ItemList data={data.itemCards}></ItemList>}
      </div>

      <div className="w-6/12 m-auto h-3 bg-slate-100"></div>
    </>
  );
}
