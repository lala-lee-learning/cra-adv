import { useContext, useRef } from "react";
import productsData from "../assets/productsData";
import { CartContext } from "../store";

const Products = () => {
  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useContext(CartContext);
  const selectRefs = useRef([]);
  return (
  <div className="row row-cols-3 g-3">
    {productsData.map((product, productIdx) => {
      return (
      <div className="col" key={product.id}>
        <div className="card">
          <img src={product.img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h6 className="card-title">
              <span>{product.title}</span>
              <span className="float-end">NT$ {product.price}</span>
            </h6>
            <div className="d-flex justify-content-between">
              <div className="w-30">
                <select name="" id=""
                  ref={el => selectRefs.current[productIdx] = el} 
                  className="form-select"
                  onChange={(e) => {
                    e.preventDefault();
                    selectRefs.current[productIdx] = e.target;
                  }}
                >
                  {[...Array(20)].map((_, idx) => {
                    return (
                      <option value={idx + 1} key={idx}>{idx + 1}</option>
                    )
                  })}                
                </select>
              </div>
              <button type="button" 
                  className="btn btn-outline-primary"
                  onClick={()=>{
                    const quantity = parseInt(selectRefs.current[productIdx].value);
                    dispatch({
                      type: "ADD_TO_CART",
                      payload: {
                        ...product,
                        quantity,
                      },
                    });
                  }}
              >加入購物車</button> 
            </div>
          </div>
        </div>              
      </div>  
      )
    })}                                           
  </div> 
  );
};
export default Products;