import React from 'react';
import { Link } from 'react-router-dom';

function TelaInicial() {
  return (
    <div>
      <h2>Tela Inicial</h2>
      <Link to="/horas-salario">Avançar</Link>
    </div>
  );
}

export default TelaInicial;
