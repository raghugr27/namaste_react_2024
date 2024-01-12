// Hello world from javascript
// const heading = document.createElement("h1");
// heading.innerHTML = "Hello World from Javascript";
// const root = document.getElementById("root");
// root.appendChild(heading);

// Hello world from react with nested Elements


const heading = React.createElement("h1", { className: "heading" }, "Hello World From Javascript");
const parent = React.createElement("div", { id: "parent" },
    [React.createElement("div", { id: "children1" },
        [React.createElement("h1", { id: "h1" }, "I'm an h1 tag"), React.createElement("h1", { id: "h2" }, "I'm an h2 tag")]), React.createElement("div", { id: "children2" },
            React.createElement("h1", { id: "h1" }, "I'm an h1 tag"))])
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
