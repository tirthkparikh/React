import React from "react";
import { useState, useEffect } from "react";
import { MENU_API } from "../utils/constants";
export default function useRestrauntMenu(resId) {
  const [menuData, setMenuData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    console.log(MENU_API + resId);
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setMenuData(json);
  };
  return menuData;
}
