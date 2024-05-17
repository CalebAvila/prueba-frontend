import { Link } from "react-router-dom"


export const ItemCliente = ({ cliente }) => {
  return (
    <tr>
      <th scope="row">{ cliente.id }</th>
      <td>{ cliente.nombre_comercial }</td>
      <td>{ cliente.telefono }</td>
      <td>{ cliente.correo }</td>
      <td>
        <Link to={`/cliente/${cliente.id}`} type="button" className="btn btn-primary btn-sm me-2">Edit</Link>
        <button type="button" className="btn btn-danger btn-sm">Del</button>
      </td>
    </tr>
  )
}
