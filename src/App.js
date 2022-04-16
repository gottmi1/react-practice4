import React, { useState } from "react";
import Header from "./componenets/Layout/Header";
import Meals from "./componenets/Meals/Meals";
import Cart from "./componenets/Cart/Cart";
import CartProvider from "./store/Cart-Provider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHanlder = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHanlder} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
