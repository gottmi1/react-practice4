import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  // action은 후에 설정하는 것, state는 reducer가 관리하는 마지막 snapshot이다
  if (action.type === "ADD") {
    const updatedItems = state.items.concat(action.item); // 현재 state의 스냅샷의 item을 리액트가 reducer의 첫 번째 인자로 보냄
    const updatedTotalAmout =
      state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmout,
    };
    // 새로 업데이트 된 state 스냅샷을 return
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  // 두 요소와 함께 배열을 리턴하기 때문에 별개로 보관한다. 첫번째 요소는 스테이트 스냅샷, 두번째 요소는 reducer에서 action을 전송하는 역할을 하는 함수

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };
  const removeItemToCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
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
