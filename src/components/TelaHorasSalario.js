import React from 'react';
import { Link } from 'react-router-dom';
import AppContext from "../AppContext";
import { useContext } from "react";

function TelaHorasSalario() {
  const { valorHora, setValorHora, horasSemana, setHorasSemana } = useContext(AppContext);

  return (
    <div>
      <h2>Tela de Horas e Salário</h2>
      <input
        type="number"
        placeholder="Valor da Hora"
        value={valorHora}
        onChange={(e) => setValorHora(parseFloat(e.target.value))}
      />
      <input
        type="number"
        placeholder="Horas por Semana"
        value={horasSemana}
        onChange={(e) => setHorasSemana(parseInt(e.target.value))}
      />
      <Link to="/resultado">Concluir</Link>
    </div>
  );
}

export default TelaHorasSalario;
