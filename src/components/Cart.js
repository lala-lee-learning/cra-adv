const Cart = () => {
  return (
  <div className="bg-light p-3">
    <table className="table align-middle">
      <tbody>
        <tr>
          <td><a href="#">x</a></td>
          <td>
            <img src="https://images.unsplash.com/photo-1585653621032-a5fec164ee92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHN3ZWV0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" 
              className="table-image" 
              alt="..." 
            />
          </td>
          <td>
            <span>全蔬食健康餐</span>
            <br/>
            <small className="text-muted">NT$ 200</small>
          </td>
          <td>
            <select name="" id="" className="form-select"></select>
          </td>
          <td className="text-end">
            <span>NT$ 400</span>
          </td>
        </tr>
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