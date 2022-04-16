import React, { Fragment, useState } from "react";
import Header from "./componenets/Layout/Header";
import Meals from "./componenets/Meals/Meals";
import Cart from "./componenets/Cart/Cart";

function App() {
  const [cartIsShown, setCartIsShown] = useState(true);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHanlder = () => {
    setCartIsShown(false);
  };

  return (
    <Fragment>
      {cartIsShown && <Cart onClose={hideCartHanlder} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
