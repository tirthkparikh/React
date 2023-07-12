import React from "react";
import ResCard from "./ResCard";
import datArray from "../utils/mockData";
import { useState } from "react";

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant.data.name.includes(searchText)
  );

  return filterData;
}

const Body = () => {
  const [data, SetData] = useState(datArray);
  const [searchText, setSearchText] = useState("");

  return (
    <React.Fragment>
      <div className="searchAndFilter">
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              //need to filter the data
              const value = filterData(searchText, data);
              // update the state - restaurants
              SetData(value);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-data"
          onClick={() => {
            SetData(datArray.filter((item) => item.data.avgRating > 4.1));
          }}
        >
          Top Rated Restaurants
        </button>
        <button
          className="clear-data"
          onClick={() => {
            SetData(datArray);
          }}
        >
          Clear
        </button>
      </div>
      <div className="res-container">
        {data.map((restaurant) => (
          <ResCard key={restaurant.data.id} ResData={restaurant} />
        ))}
      </div>
    </React.Fragment>
  );
};
export default Body;
