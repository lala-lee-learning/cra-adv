import { useContext } from "react";
import { CartContext } from "../store";

const Cart = () => {
  const [state, dispatch] = useContext(CartContext);
  return (
  <div className="bg-light p-3">
    <table className="table align-middle">
      <tbody>
        {state.cartList.map((item) => (
        <tr key={item.id}>
          <td>
            <button type="button" 
              className="btn btn-sm"
              onClick={() => {
                dispatch({
                  type: "REMOVE_CART_ITEM",
                  payload: {
                    ...item
                  },
                });
              }}
            >x</button>
          </td>
          <td>
            <img src={item.img} 
              className="table-image" 
              alt="..." 
            />
          </td>
          <td>
            <span>{item.title}</span>
            <br/>
            <small className="text-muted">NT$ {item.price}</small>
          </td>
          <td className="form-outline w-25">
            <input type="number" name="" id=""
              className="form-control"
              value={item.quantity}
              onChange={(e) => {
                e.preventDefault();
                const quantity = parseInt(e.target.value);
                dispatch({
                  type: "CHANGE_CART_QUANTITY",
                  payload: {
                    ...item,
                    quantity,
                  },
                });
              }}
            >
            </input>
          </td>
          <td className="text-end">
            <span>NT$ {item.price * item.quantity}</span>
          </td>
        </tr>          
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan={5} className="text-end">
            <span>總金額 NT$ {state.total || 0}</span>
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
  );
};
export default Cart;