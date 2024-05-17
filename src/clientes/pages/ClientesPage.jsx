import { TableClientes } from '../components/TableClientes';
import { Link } from 'react-router-dom';

export const ClientesPage = () => {

  return (
    <>
      <nav className="navbar bg-light">
        <div className="container-fluid px-5">
          <span className="navbar-brand mb-0 h1">Directorio de Clientes</span>
          <Link to="/nuevo-cliente" className="btn btn-outline-success justify-content-end" type="submit">+ Agregar</Link>
        </div>
      </nav>
      <TableClientes />
    </>
  )
}
