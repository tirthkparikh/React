import React from "react";

const Card = ({ image, name, price }) => {
  return (
    <div className="p-4 mx-4 my-2 w-[200px] h-[250px] shadow shadow-zinc-900 border border-solid  border-gray-50">
      <img src={image} alt={name} className="rounded-lg" />
      <div className="p-1">
        <h3 className="p-1">{name}</h3>
        <p className="p-1">{price} rupees</p>
      </div>
    </div>
  );
};

export default Card;
