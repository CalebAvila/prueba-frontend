import React from 'react'

export const ItemCliente = ({ cliente }) => {
  return (
    <tr>
      <th scope="row">{ cliente.id }</th>
      <td>{ cliente.nombre_comercial }</td>
      <td>{ cliente.telefono }</td>
      <td>{ cliente.correo }</td>
      <td>
        <button type="button" className="btn btn-primary btn-sm me-2">Edit</button>
        <button type="button" className="btn btn-danger btn-sm">Del</button>
      </td>
    </tr>
  )
}
