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
          <td><a href="#">x</a></td>
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
          <td>
            <select name="" id="" className="form-select"></select>
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
            <span>總金額 NT$ 400</span>
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
  );
};
export default Cart;