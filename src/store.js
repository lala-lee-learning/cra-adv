import { createContext } from "react";

const calculateTotalPrice = (cartList) => {
  return cartList
    .map((item) => item.quantity * item.price)
    .reduce((prev, curr) => prev + curr, 0);
};

export const cartInit = {
  cartList: [],
};

export const cartReducer = (state, action) => {
  const cartList = [...state.cartList];
  // #1 先取得當前購物車目標品項的索引
  const {id, quantity} = action.payload;
  const index = cartList.findIndex((item) => item.id === id);
  switch (action.type) {
    case 'ADD_TO_CART':
      if(index === -1) {
        // 未加入購物車
        cartList.push(action.payload);
      } else {
        // 當前購物車的項目與加入的項目一致
        cartList[index].quantity += quantity;
      }
      return {
        ...state,
        cartList,
        total:calculateTotalPrice(cartList),
      };
    case 'CHANGE_CART_QUANTITY':
      cartList[index].quantity = quantity;
      return {
        ...state,
        cartList,
        total:calculateTotalPrice(cartList),
      };
    case 'REMOVE_CART_ITEM':
      cartList.splice(index, 1);
      return {
        ...state,
        cartList,
        total:calculateTotalPrice(cartList),
      };
    default:
      return state;
  }
};

export const CartContext = createContext({});