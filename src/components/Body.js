import React from "react";
import ResCard from "./ResCard";
import { ResCardPromoted } from "./ResCard";
import useOnlineStatus from "../utils/useOnlineStatus";
import { DATA_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";
import { useContext } from "react";
import userLoggedI from "../utils/userContext";

function filterDatafn(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant.data.name.toUpperCase().includes(searchText.toUpperCase())
  );

  return filterData;
}
const PromotedResCard = ResCardPromoted(ResCard);

const Body = () => {
  const [name, setname] = useState();
  const [searchText, setSearchText] = useState("");
  const [data, SetData] = useState([]);
  const [filterData, SetFilterData] = useState([]);
  const [flag, SetFlag] = useState(false);
  const stauts = useOnlineStatus();

  const { setName, userLoggedIn } = useContext(userLoggedI);
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
    <div className="bg-blue-50 mt-0">
      <div className="pl-2 m-2">
        <input
          data-testid="input"
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
          data-testid="button"
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
        <div>
          <label>UserName:</label>
          <input
            className=" border border-black "
            value={userLoggedIn}
            onChange={(e) => {
              setname(e.target.value);
              setName(e.target.value);
            }}
          ></input>
        </div>
      </div>
      {flag ? (
        <div
          data-testid="restData"
          className="flex flex-wrap align-middle w-[100%]"
        >
          {filterData?.map((restaurant) => (
            <Link
              className="custom-link"
              key={restaurant.data.id}
              to={"/restaurants/" + restaurant.data.id}
            >
              {restaurant.data.promoted ? (
                <PromotedResCard ResData={restaurant} />
              ) : (
                <ResCard ResData={restaurant} />
              )}
            </Link>
          ))}
        </div>
      ) : (
        <Shimmer />
      )}
    </div>
  );
};
export default Body;
