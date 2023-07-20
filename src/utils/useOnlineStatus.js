import React from "react";
import { useState, useEffect } from "react";

export default function useOnlineStatus() {
  const [menuData, setMenuData] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", () => {
      setMenuData(false);
    });
    window.addEventListener("online", () => {
      setMenuData(true);
    });
  }, []);

  return menuData;
}
