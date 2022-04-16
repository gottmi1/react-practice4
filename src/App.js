import React, { Fragment, useState } from "react";
import Header from "./componenets/Layout/Header";
import Meals from "./componenets/Meals/Meals";
import Cart from "./componenets/Cart/Cart";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHanlder = () => {
    setCartIsShown(false);
  };

  return (
    <Fragment>
      <Cart />
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
