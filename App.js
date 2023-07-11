import React from "react";
import ReactDOM from "react-dom/client";

// creating element and rendering by React

const root = ReactDOM.createRoot(document.getElementById("root"));
const Head = React.createElement(
  "h1",
  {
    id: "one",
    className: "welcome",
  },
  "Hello world from REACT!"
);
console.log(Head); //gives object

// console of Head will give us object as it is react element
// root.render(Head)

// /How to create below struct in react ?
{
  /* <div>
    <div>
        <h1>xyz</h1>
    </div>
</div> */
}

// const parent = React.createElement(
//     'div',
//     {id:'parent'},
//     React.createElement(
//         'div',
//         {id:'son'},
//         React.createElement('h1',
//         {id:'grandson'},
//         "hi")
//     )
// )

// /How to create below struct in react ?
{
  /* <div>
    <div>
        <h1>xyz</h1>
        <h1>abc</h1>
    </div>
</div> */
}

//in place of last last create element we create array of two

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "son" }, [
//     React.createElement("h1", { id: "grandson" }, "hi"),
//     React.createElement("h1", { id: "grandson2" }, "hi2"),
//   ])
// );

// /How to create below struct in react ?
{
  /* <div>
    <div>
        <h1>xyz</h1>
        <h1>abc</h1>
    </div>
     <div>
        <h1>xyz</h1>
        <h1>abc</h1>
    </div>
</div> */
}

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "son" }, [
    React.createElement("h1", { id: "grandson" }, "hi"),
    React.createElement("h1", { id: "grandson2" }, "hi2"),
  ]),
  React.createElement("div", { id: "son2" }, [
    React.createElement("h1", { id: "grandson3" }, "hi3"),
    React.createElement("h1", { id: "grandson4" }, "hi4"),
  ]),
]);
// root.render(parent); //render takes react object converts to html and then renders on root

//JSX is like html and js but it is not html
//JSX is not understand JS engine but babel is used by parcel to transpile it
//not pure js so bable transpiles it to pure js

const heading = <h1 className="welcome">this is JSX </h1>;

//in JSX we provide atttribute in cammel case

//We write JSX in () if it is in more than one line

////////////////////////////////////////////

//react component

//class based component : old way

// functional component : new way
// Just a normal js function
// we should name it with capital component

//keeping component in another component is called component composition
const HeadComponent = (props) => {
  console.log(props.props);
  return (
    <React.Fragment>
      App
      <h1>Namaste react from functinal component</h1>
      {props.props}
      {props.props ? <>hello</> : <>hii</>} //this is how we use js in jsx
      {OtherWayToWriteComponent()}
      {<OtherWayToWriteComponent />}
      {<OtherWayToWriteComponent></OtherWayToWriteComponent>}
    </React.Fragment>
  );
};
//{}=>if we want to use any js fn,variablr inside jsx we use inside{}
/// we can use below ways to add other function in react funstion
///<OtherWayToWriteComponent />
/// {OtherWayToWriteComponent()}
// {<OtherWayToWriteComponent />}
// {<OtherWayToWriteComponent></OtherWayToWriteComponent>}
///
///
const OtherWayToWriteComponent = () => (
  <div>
    IF we have no functions to write in our component then we can just use ()
    and not return keyWordß
  </div>
);

root.render(<HeadComponent props={heading} />);
