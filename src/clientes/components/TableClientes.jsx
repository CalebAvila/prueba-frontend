import React, { useEffect, useState } from 'react'
import { clientesApi } from '../../api/clientesApi';
import { ItemCliente } from './ItemCliente';

export const TableClientes = () => {

  const [clientes, setClientes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    clientesApi.get('cliente').then(result => {
      setClientes(result.data);
    });  
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = clientes.filter(item => {
    const regex = new RegExp(searchTerm, 'i');
    return regex.test(item.nombre_comercial);
  });

  return (
    <div className="container mt-3">
      <form className="d-flex" role="search">
        <input 
          className="form-control me-2" 
          type="text" 
          placeholder="Buscar por Nombre comercial" 
          value={ searchTerm } 
          onChange={ handleSearchChange} />
      </form>
      <table className="table mt-3">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nombre comercial</th>
            <th scope="col">Telefono</th>
            <th scope="col">Correo</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {
            filteredData.map(cliente => (
              <ItemCliente key={ cliente.id } cliente={ cliente } />
            ))
          }
        </tbody>
      </table>
    </div>
  )
}
