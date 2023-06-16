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
root.render(parent); //render takes react object converts to html and then renders on root
