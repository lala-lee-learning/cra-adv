function App() {
  return (
    <div className="App">
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <span className="navbar-brand">甜點蛋糕店</span>
          <button className="btn btn-outline-dark position-relative" type="button">
            <span>購物車</span>
            <span className="badge rounded-pill text-bg-danger position-absolute top-0 start-100 translate-middle">99</span>
          </button>
        </div>
      </nav>
      <div className="container mt-4">
      {/* 外層格線 */} 
        <div className="row">
          <div className="col-md-7">
          {/* 內層格線 */}
          <div className="row row-cols-3 g-3">
            <div className="col">
              <div className="card">
                <img src="https://images.unsplash.com/photo-1585653621032-a5fec164ee92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHN3ZWV0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">
                    <span>全蔬食健康餐</span>
                    <span className="float-end">NT$ 200</span>
                  </h5>
                  <button type="button" className="btn btn-outline-primary w-100">
                    加入購物車
                  </button>
                </div>
              </div>              
            </div>
            <div className="col">
              <div className="card">
                <img src="https://images.unsplash.com/photo-1585653621032-a5fec164ee92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHN3ZWV0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">
                    <span>全蔬食健康餐</span>
                    <span className="float-end">NT$ 200</span>
                  </h5>
                  <button type="button" className="btn btn-outline-primary w-100">
                    加入購物車
                  </button>
                </div>
              </div>              
            </div>
            <div className="col">
              <div className="card">
                <img src="https://images.unsplash.com/photo-1585653621032-a5fec164ee92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHN3ZWV0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">
                    <span>全蔬食健康餐</span>
                    <span className="float-end">NT$ 200</span>
                  </h5>
                  <button type="button" className="btn btn-outline-primary w-100">
                    加入購物車
                  </button>
                </div>
              </div>              
            </div>
            <div className="col">
              <div className="card">
                <img src="https://images.unsplash.com/photo-1585653621032-a5fec164ee92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHN3ZWV0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">
                    <span>全蔬食健康餐</span>
                    <span className="float-end">NT$ 200</span>
                  </h5>
                  <button type="button" className="btn btn-outline-primary w-100">
                    加入購物車
                  </button>
                </div>
              </div>              
            </div>
            <div className="col">
              <div className="card">
                <img src="https://images.unsplash.com/photo-1585653621032-a5fec164ee92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHN3ZWV0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">
                    <span>全蔬食健康餐</span>
                    <span className="float-end">NT$ 200</span>
                  </h5>
                  <button type="button" className="btn btn-outline-primary w-100">
                    加入購物車
                  </button>
                </div>
              </div>              
            </div>                                                
          </div> 
          </div>
          <div className="col-md-5">
            <div className="bg-light p-3">
              <table className="table align-middle">
                <tbody>
                  <tr>
                    <td><a href="#">x</a></td>
                    <td><img src="" alt="" /></td>
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
          </div>
        </div>
      </div>      
    </div>
  );
}

export default App;
