import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // styling can add like this, like a JS object.
  // const style = { color: "red", fontSize: "3rem", textTransform: "uppercase" };
  const style = {};

  return (
    <header className="header">
      {/* inline styling. */}
      {/* <h1 style={{ backgroundColor: "red" }}>Fast React Pizza Co.</h1> */}
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const pizzasLength = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {/* Conditional rendering using AND */}
      {/* {pizzasLength > 0 && (
        <ul className="pizzas">
          {pizzas.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      )} */}

      {/* Conditional rendering using Ternary */}
      {pizzasLength > 0 ? (
        <>
          {" "}
          {/* this empty tag is know as react fragment which is not giving us a container type div but works if you want to wrap something without having a separate container because in react sometimes you got eeror when not having a raper and you don't to have raper so in that case react fragment helps you to wrap things without having any container to show. */}
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis et
            asperiores fugit rem quo accusamus.
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're working on our menu. Please come back later.</p>
      )}

      {/* Props definition. */}
      {/* <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={10} // integers should write in JS mode means in these curly braces.
      />

      <Pizza
        name="Funghi"
        price={12} // integers should write in JS mode means in these curly braces.
        ingredients="Tomato, mozarella, mushrooms, and onion"
        photoName="pizzas/funghi.jpg"
      /> */}
    </main>
  );
}

// destructuring props by using props name inside curly braces {}.
function Pizza({ pizzaObj }) {
  // if (pizzaObj.soldOut) return null;
  return (
    // conditional adding class
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h2>{pizzaObj.name}</h2>
        <p>{pizzaObj.ingredients}</p>

        {/* we can do it like this and */}
        {/* {pizzaObj.soldOut ? (
          <span>SOLD OUT!</span>
        ) : (
          <span>{pizzaObj.price}</span>
        )} */}

        {/* also like this but this is looking good. And this is all for showing some conditional text on UI */}
        <span>{pizzaObj.soldOut ? "SOLD OUT!" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 9;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  console.log(isOpen);
  // if (hour >= openHour && hour <= closeHour) alert("Welcome!");
  // else alert(`Sorry we're closed!, It's, ${hour}`);
  // without JSX.
  // return React.createElement("footer", null, "We're currently open!");

  // now using JSX.
  return (
    <footer>
      {/* Conditional rendering using AND */}
      {/* {isOpen && (
        <div className="order">
          <p>We're open until {closeHour}:00. Come visit or order online.</p>
          <button className="btn">Order</button>
        </div>
      )} */}

      {/* Ternary operators */}
      {isOpen ? (
        <div className="order">
          <p>We're open until {closeHour}:00. Come visit or order online.</p>
          <button className="btn">Order</button>
        </div>
      ) : (
        <p>
          We're happy to Welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )}
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
