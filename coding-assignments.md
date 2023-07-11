session-3 assignment

import React from "react";
import ReactDOM from "react-dom/client";

//this way we can cretae 3 child inside parent using[]
const header = React.createElement("div", { class: "title" }, [
  React.createElement("h1", {}, "H1"),
  React.createElement("h2", {}, "H2"),
  React.createElement("h3", {}, "H3"),
]);

const headerJsx = (
  <div id="header" className="title">
    <h1>h1</h1>
    <h2>h2</h2>
    <h3>h3</h3>
  </div>
);
const FuncHeader = () => (
  <div className="title">
    <h1>h1</h1>
    <h2>h2</h2>
    <h3>h3</h3>
  </div>
);

const FuncHeader2 = () => (
  <>
    <div className="title">
      {FuncHeader()}
      {<FuncHeader />}
      {<FuncHeader></FuncHeader>}
      <h1>h1</h1>
      <h2>h2</h2>
      <h3>h3</h3>
    </div>
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FuncHeader2 />);


part-2

import React from "react";
import ReactDOM from "react-dom/client";
import { Icon } from "./iconman.svg";
const imageUrl = "./Hellomf.png";
const Header = () => (
  <>
    <div className="header">
      <img className="logo" src={require("./helloMf.png")} />
      <input className="mySearch" type="text" placeholder="Search Here"></input>
      <img className="user" src={require("./iconman.svg")} />
    </div>
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Header />);