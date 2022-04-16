import CartContext from "./cart-context";

const CartProvider = (props) => {
  const addItemToCartHandler = (item) => {};
  const removeItemToCartHandler = (id) => {};

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
  // 이 컨텍스트에 엑세스하는 모든 구성요소를 CartContext.Provider로 감싸준다
};

export default CartProvider;
// 장바구니 컨텍스트와 데이터를 관리하기 위함. 모든 구성요소에 엑세스하려는 컨텍스트를 제공하기위해 만들어 졌다. 만든 후 app.js 최상위를 fragment가 아닌 이 컴포넌트로 바꾸면 모든 구성요소에서 접근 가능하다.
