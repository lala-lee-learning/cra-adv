import { useReducer } from "react";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Cart from "./components/Cart";
import { CartContext } from "./store";


const App = () => {
  const cartReducer = useReducer((state, action) => {
    const cartList = [...state.cartList];
    // #1 先取得當前購物車目標品項的索引
    const {id, quantity} = action.payload;
    const index = cartList.findIndex((item) => item.id === id);
    console.log(index);
    console.log(action);
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
        };
      default:
        return state;
    }
  }, {
    cartList: [],
  });
  return (
    <CartContext.Provider value={cartReducer}>
      <div className="App">
        <Navbar />
        <div className="container mt-4">
        {/* 外層格線 */} 
          <div className="row">
            <div className="col-md-7">
              <Products />
            </div>
            <div className="col-md-5">
              <Cart />
            </div>
          </div>
        </div>      
      </div>
    </CartContext.Provider>
  );
}

export default App;
