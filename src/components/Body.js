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
      <div className="pl-2 m-2">
        <input
          type="text"
          placeholder="Search"
          className=" border border-solid border-black rounded-md"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />

        <button
          className=" ml-5 px-2 bg-green-200 rounded-xl"
          onClick={() => {
            //need to filter the data
            const value = filterDatafn(searchText, data);
            // update the state - restaurants
            SetFilterData(value);
          }}
        >
          Search
        </button>

        <button
          className="mx-2 px-2 bg-gray-200 rounded-xl"
          onClick={() => {
            SetFilterData(
              filterData.filter((item) => item.data.avgRating > 4.1)
            );
          }}
        >
          Top Rated Restaurants
        </button>
        <button
          className="mb-5 px-2 bg-gray-200 rounded-xl"
          onClick={() => {
            fetchData();
          }}
        >
          Clear
        </button>
      </div>
      {flag ? (
        <div className="flex flex-wrap align-middle w-[100%]">
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
