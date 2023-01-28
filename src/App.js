import { useReducer } from "react";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Cart from "./components/Cart";
import { CartContext } from "./store";


const App = () => {
  const cartReducer = useReducer((state, action) => {
    console.log(action);
    switch (action.type) {
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
