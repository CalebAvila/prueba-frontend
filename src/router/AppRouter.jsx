import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ClientesPage } from '../clientes/pages/ClientesPage'
import { NuevoClientePage } from '../clientes/pages/NuevoClientePage'
import { ClientePage } from '../clientes/pages/ClientePage'

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path='/clientes' element={<ClientesPage />} />
        <Route path='/nuevo-cliente' element={<NuevoClientePage />} />
        <Route path='/cliente:id' element={<ClientePage />} />
      </Routes>
    </>
  )
}
