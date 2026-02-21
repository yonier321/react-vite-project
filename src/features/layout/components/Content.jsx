import React from 'react'

export const Content = () => {
  return (
    <div className="container my-5">
      <div className="row">

        {/* PRODUCTOS */}
        <div className="col-lg-8">
          <h4 className="mb-4">Productos Disponibles</h4>

          <div className="row">

            <div className="col-md-6 mb-4">
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <h5 className="card-title">Laptop HP</h5>
                  <p className="text-primary fw-bold">$3.200.000</p>
                  <span className="badge bg-success">Disponible</span>

                  <button className="btn btn-outline-dark w-100 mt-3">
                    Agregar al carrito
                  </button>
                </div>
              </div>
            </div>

            <div className="col-md-6 mb-4">
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <h5 className="card-title">Mouse Gamer RGB</h5>
                  <p className="text-primary fw-bold">$120.000</p>
                  <span className="badge bg-warning text-dark">
                    Pocas unidades
                  </span>

                  <button className="btn btn-outline-dark w-100 mt-3">
                    Agregar al carrito
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* CARRITO VISUAL */}
        <div className="col-lg-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="mb-3">🛒 Carrito</h5>

              <ul className="list-group mb-3">
                <li className="list-group-item d-flex justify-content-between">
                  Laptop HP
                  <span>$3.200.000</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  Mouse Gamer RGB
                  <span>$120.000</span>
                </li>
              </ul>

              <div className="d-flex justify-content-between fw-bold">
                <span>Total</span>
                <span>$3.320.000</span>
              </div>

              <button className="btn btn-dark w-100 mt-3">
                Finalizar Compra
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}