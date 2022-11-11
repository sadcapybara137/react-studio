import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem"

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cart, setCart] = useState([]);
  const [cartnames, setCartNames] = useState([]);
  const [total, setTotal] = useState(0);
  const names = ["Cookies", "Matcha Mille Crepe", "Egg Boi", "Ube Boi", "Brownies", "Macarons","Bread", "Croissant",
                "Bread with Butter", "Cake Lad", "Tart", "Bagel", "Gingerbread Cookie", "Cheesecake", "Creampuff"]
    function updateCart(name, price) {
        setCart([...cart, price])
        setCartNames([...cartnames, name])
        setTotal(total + price)
    }
    return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}
      {bakeryData.map((item, index) => (
          <div>
              <BakeryItem url={item.image} price={setPrice(index)} name={names[index]}/>
              <button onClick={() => updateCart(names[index], setPrice(index))}> Add to cart! </button>
          </div>
          // TODO: map bakeryData to BakeryItem components
      ))}

      <div>
        <h2>Cart</h2>
          {cart.map((price, index) => (
              <p> {cartnames[index]} ${price}</p>
          ))}
          <p> Total Cost: ${Math.round(total*100) / 100}</p>

        {/* TODO: render a list of items in the cart */}
      </div>
    </div>
  );
}

function setPrice(index) {
    if(index % 2 === 1) {
        return 7.99;
    } else {
        return 2.99;
    }
}

export default App;
