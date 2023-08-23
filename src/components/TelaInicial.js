import React from 'react';
import { NavLink, Outlet } from "react-router-dom";

function TelaInicial () {
  return (
    <div style={{ marginLeft: '10px' }}>
      <h2>Tela Inicial</h2>
      <NavLink exact="true" to="/horas-salario">Avançar</NavLink>
      <Outlet />
    </div>
  );
}

export default TelaInicial;
