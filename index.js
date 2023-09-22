import React from "react";
import ReactDOM from "react-dom/client";

// food ordering app (reference from swiggy app)

// steps
// 1. planing , if planing is good code creation is easy
// 2. make wireframe
// 3. list down the components we have to make (reusable and non-reusable)

// component list
// 1. header navigator
// 2. Body comp
//     - card component inside body component
//         -img and info
// 3. footer (copyright links)

const Header = () => {
  return (
    <div className="header">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqgqV9sezgYxiiPqaJ3NXXvwDbkzgXpCeBWQ&usqp=CAU" />
      <div>
        <ul>
          <li>Home</li>
          <li>contact</li>
          <li>about</li>
        </ul>
      </div>
    </div>
  );
};

const styleCard = {
  borderRadius: "10px",
};

const Card = () => {
  return (
    <div className="res-card" style={styleCard}>
      <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/o5hs7dy6iwtkl8ugfmtn" />
      <h3>MCD</h3>
      <p> food </p>
      <p>cuisine</p>
      <p>rating</p>
    </div>
  );
};

const Body = () => {
  return (
    <div className="container">
      <input type="text" placeholder="Search Places" />
      <div className="cards">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

const Footer = () => {
  return <div>Footer</div>;
};

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const Root = ReactDOM.createRoot(document.getElementById("root"));

Root.render(<AppLayout />);
