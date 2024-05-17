import React, { useEffect, useState } from 'react'
import { clientesApi } from '../../api/clientesApi';
import { ItemCliente } from './ItemCliente';

export const TableClientes = () => {

  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    clientesApi.get('cliente').then(result => {
      setClientes(result.data);
    });
  
  }, [])

  console.log(clientes);

  return (
    <table className="table">
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
          clientes.map(cliente => (
            <ItemCliente key={ cliente.id } cliente={ cliente } />
          ))
        }
      </tbody>
    </table>
  )
}
