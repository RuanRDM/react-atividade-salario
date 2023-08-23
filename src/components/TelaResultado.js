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
    <div style={{ marginLeft: '10px' }}>
      <h2>Tela de Resultado</h2>
      <p>Nome: {nome}</p>
      <p>Telefone: {telefone}</p>
      <p>Salário Bruto: R${salarioBruto.toFixed(2)}</p>
      <p>INSS: R${inss.toFixed(2)}</p>
      <p>Salário Líquido: R${salarioLiquido.toFixed(2)}</p>
      <Link to="/">Voltar</Link>

      <h3>Tabela de Desconto do INSS</h3>
      <table style={{ borderCollapse: 'collapse', border: '1px solid black' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid black', padding: '8px' }}>De</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Até</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Alíquota</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px' }}>0,00</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>1.302,00</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>7,5%</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px' }}>1.302,01</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>2.571,29</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>9,00%</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px' }}>2.571,30</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>3.856,94</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>12,00%</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px' }}>3.856,95</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>7.507,49</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>14,00%</td>
          </tr>
        </tbody>
      </table>
      <h6>Obs: salários acima de 7.507,49 pagam 14% sobre este valor somente</h6>

    </div>
  );
}

export default TelaResultado;
