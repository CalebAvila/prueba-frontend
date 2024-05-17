import React from 'react'

export const NuevoClientePage = () => {
  return (
    <>
      <nav className="navbar bg-light">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">Nuevo Cliente</span>
        </div>
      </nav>
      <div className="container mt-5">
        <form>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Nombre Comercial</label>
            <input type="name" className="form-control" />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Correo electrronico</label>
            <input type="email" className="form-control" />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Telefono</label>
            <input type="number" className="form-control"/>
          </div>
          <button type="submit" className="btn btn-primary">Guardar</button>
        </form>
      </div>
    </>
  )
}
