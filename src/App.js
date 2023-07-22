import React, { useEffect, useState } from "react";
import { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { Error } from "./components/Error";
import { ContactUs } from "./components/ContactUs";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import { Restaurants } from "./components/Restaurants";
import userLoggedI from "./utils/userContext";

const Grocery = lazy(() => import("./components/Grocery"));

const About = lazy(() => import("./components/About"));

const App = () => {
  const [name, setName] = useState();

  useEffect(() => {
    const data = {
      name: "Tirth Parikh",
    };
    setName(data.name);
  }, []);

  return (
    <React.Fragment>
      <userLoggedI.Provider value={{ userLoggedIn: name, setName }}>
        <Header />
        <Outlet />
      </userLoggedI.Provider>
    </React.Fragment>
  );
};
// first we create route config
const routeConfig = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },

      {
        path: "/restaurants/:resId",
        element: <Restaurants />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routeConfig} />);
