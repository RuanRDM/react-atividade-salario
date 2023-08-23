import React from 'react';
import { Link } from 'react-router-dom';
import AppContext from "../AppContext";
import { useContext } from "react";

function TelaResultado() {
  const { nome, telefone, valorHora, horasSemana } = useContext(AppContext);

  const semanasNoMes = 5;
  const salarioBruto = valorHora * horasSemana * semanasNoMes;

  let inss = 0;
  if (salarioBruto <= 1302) {
    inss = salarioBruto * 0.075;
  } else if (salarioBruto <= 2571.29) {
    inss = salarioBruto * 0.09;
  } else if (salarioBruto <= 3856.94) {
    inss = salarioBruto * 0.12;
  } else if (salarioBruto <= 7507.49) {
    inss = salarioBruto * 0.14;
  } else {
    inss = 7507.49 * 0.14;
  }

  const salarioLiquido = salarioBruto - inss;

  return (
    <div>
      <h2>Tela de Resultado</h2>
      <p>Nome: {nome}</p>
      <p>Telefone: {telefone}</p>
      <p>Salário Bruto: R${salarioBruto.toFixed(2)}</p>
      <p>INSS: R${inss.toFixed(2)}</p>
      <p>Salário Líquido: R${salarioLiquido.toFixed(2)}</p>
      <Link to="/">Voltar</Link>
    </div>
  );
}

export default TelaResultado;
