import React from "react";
import ReactDOM from "react-dom/client";

const rawReactElement = React.createElement(
  "h1",
  { id: "heading" },
  "Raw React Element"
);

//JSX and different , JSX is sugar syntax for JS which is not necessary for react
const JSXelement = <h1 className="className">JSX element</h1>;
// Proof that JSX is not HTML is the attribute we pass in JSX -> className not class, tabIndex not tabindex
// JSX is not html inside javascript, JSX is HTML or XML like syntax
// (JSX) like syntax it looks html but it is not HTML
// JSX is not valid JS because browser cant undeerstand it directly
// JSX also handles cross site scripting which is type of an attack on api to make response the mallicious

const FunctionalComponent = () => {
  return (
    <div>
      {JSXelement}
      {rawReactElement}
    </div>
  );
};

const elementWhichHaveFunctionalComp = (
  <div>
    element which have func comp
    <FunctionalComponent />
  </div>
);

const SecondFuntionComponent = () => {
  const anyNumber = 1000;
  return (
    <div>
      <FunctionalComponent />
      {elementWhichHaveFunctionalComp}
      <h1>component for component composition</h1>
      {anyNumber} {/* {} <- this is ternary */}
      {console.log(
        "any JS code can run under ternary brackets even console.log"
      )}
      {/* this is component composition */}
      {/* component composition is basically component used inside another component it can be also component passed as PROP */}
    </div>
  );
};

{
  {
    {
      // testing bracket pair colorization
    }
  }
}

const ThirdFunctionComponent = () => SecondFuntionComponent();

// parcel(our installed bundler) is uses babel to transpile the JSX element to normal JS before it reaches the JS Engine
// babel transpile JSX before render
// babel is package which is currently transitive dependency
// babel is not a library
// babel helps in older browser runs too
// babel also does many thing apart from this

const Root = ReactDOM.createRoot(document.getElementById("root"));

// babel jobs steps (babel is super hero of browser bro)
// JSX -> React.createElement -> JS object -> rendered to make html element

Root.render(<ThirdFunctionComponent />);

// Root.render(ThirdFunctionComponent);
// above example is for wrong rendering since Functional component have to be sent in HTML like syntax

console.log(
  JSXelement,
  rawReactElement,
  " <- both JSX element & react element return JS object and not html tag"
);
