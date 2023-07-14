import React from "react";

const Card = ({ image, name, price }) => {
  return (
    <div className="res-card">
      <img src={image} alt={name} className="card-image" />
      <div className="card-info">
        <h3 className="card-name">{name}</h3>
        <p className="card-price">{price} rupees</p>
      </div>
    </div>
  );
};

export default Card;
