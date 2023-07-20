import React from "react";
import ResCard from "./ResCard";
import useOnlineStatus from "../utils/useOnlineStatus";
import { DATA_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";

function filterDatafn(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant.data.name.toUpperCase().includes(searchText.toUpperCase())
  );

  return filterData;
}

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [data, SetData] = useState([]);
  const [filterData, SetFilterData] = useState([]);
  const [flag, SetFlag] = useState(false);
  const stauts = useOnlineStatus();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const promise = await fetch(DATA_URL);
    const response = await promise.json();
    SetData(response?.data?.cards[2]?.data?.data?.cards);
    SetFilterData(response?.data?.cards[2]?.data?.data?.cards);
    SetFlag(true);
  };

  if (stauts == false) {
    return <h1>uh oh!! looks like your connection went away :( </h1>;
  }
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
              const value = filterDatafn(searchText, data);
              // update the state - restaurants
              SetFilterData(value);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-data"
          onClick={() => {
            SetFilterData(
              filterData.filter((item) => item.data.avgRating > 4.1)
            );
          }}
        >
          Top Rated Restaurants
        </button>
        <button
          className="clear-data"
          onClick={() => {
            fetchData();
          }}
        >
          Clear
        </button>
      </div>
      {flag ? (
        <div className="res-container">
          {filterData.map((restaurant) => (
            <Link
              className="custom-link"
              key={restaurant.data.id}
              to={"/restaurants/" + restaurant.data.id}
            >
              <ResCard ResData={restaurant} />
            </Link>
          ))}
        </div>
      ) : (
        <Shimmer />
      )}
    </React.Fragment>
  );
};
export default Body;
