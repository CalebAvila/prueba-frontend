import React from 'react';
import { useForm } from '../../hooks/useForm';
import { Link } from 'react-router-dom';
import { clientesApi } from '../../api/clientesApi';

const formData = {
  nombre_comercial: '',
  telefono: '',
  correo: '',
}

const formValidations = {
  nombre_comercial: [ (value) => value.length >= 1, 'Debe de ingresar un nombre.'],
  telefono: [ (value) => value.length >= 1, 'Debe ingresar un telefono.'],
  correo: [(value) => value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/), 'Debe ingresar un correo valido.'],
}

export const NuevoClientePage = () => {

  const { formState, nombre_comercial, correo, telefono, onInputChange, isFormValid, nombreComercialValid, correoValid, telefonoValid } = useForm(formData, formValidations);

  const onSubmit = (event) => {
    event.preventDefault();
    if(!isFormValid) return;
    clientesApi.post('cliente/', formState);
  }

  return (
    <>
      <nav className="navbar bg-light">
        <div className="container-fluid mx-5">
          <span className="navbar-brand mb-0 h1">Nuevo Cliente</span>
          <Link to="/clientes" className="btn btn-outline-success justify-content-end" type="submit">Clientes</Link>
        </div>
      </nav>
      <div className="container mt-5">
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label className="form-label">Nombre Comercial</label>
            <input type="text" className="form-control" name="nombre_comercial" value={ nombre_comercial } onChange={ onInputChange } />
            <div id="nameHelp" className="form-text" display={nombreComercialValid ? '' : 'none'}>{ nombreComercialValid }</div>
          </div>
          <div className="mb-3">
            <label className="form-label">Correo electronico</label>
            <input type="email" className="form-control" name="correo" value={ correo } onChange={ onInputChange } />
            <div id="emailHelp" className="form-text" display={correoValid ? '' : 'none'}>{ correoValid }</div>
          </div>
          <div className="mb-3">
            <label className="form-label">Telefono</label>
            <input type="number" className="form-control" name="telefono" value={ telefono } onChange={ onInputChange }/>
            <div id="phoneHelp" className="form-text" display={telefonoValid ? '' : 'none'}>{ telefonoValid }</div>
          </div>
          <button type="submit" className="btn btn-primary">Guardar</button>
        </form>
      </div>
    </>
  )
}
