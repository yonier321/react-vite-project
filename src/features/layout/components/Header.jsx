import React from 'react'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
     <header className="bg-dark py-3 shadow-sm">
      <div className="container">
        <div className="row align-items-center">

          {/* Título */}
          <div className="col-md-3">
            <h4 className="text-white mb-0">Tienda Virtual</h4>
          </div>

          {/* Barra de búsqueda */}
          <div className="col-md-4">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Buscar producto..."
              />
              <button className="btn btn-primary">
                Buscar
              </button>
            </div>
          </div>

          {/* Navegación */}
          <div className="col-md-5 text-md-end mt-3 mt-md-0">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "btn btn-primary me-2"
                  : "btn btn-outline-light me-2"
              }
            >
              Inicio
            </NavLink>

            <NavLink
              to="/Props"
              className={({ isActive }) =>
                isActive
                  ? "btn btn-primary me-2"
                  : "btn btn-outline-light me-2"
              }
            >
              Props
            </NavLink>

            <NavLink
              to="/articulos"
              className={({ isActive }) =>
                isActive
                  ? "btn btn-primary"
                  : "btn btn-outline-light"
              }
            >
              Artículos
            </NavLink>
          </div>

        </div>
      </div>
    </header>
  
  )
}