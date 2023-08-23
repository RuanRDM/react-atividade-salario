import React from 'react';
import { NavLink, Outlet } from "react-router-dom";
import AppContext from "../AppContext";
import { useContext } from "react";

function TelaHorasSalario() {
  const { valorHora, setValorHora, horasSemana, setHorasSemana, nome, setNome, telefone, setTelefone } = useContext(AppContext);
  

  return (
    <>
      <div style={{ marginLeft: '10px' }}>
      <h2>Tela de Horas e Salário</h2>
      <label htmlFor="nome">Nome</label>
      <input
           type="string"
           placeholder="Nome"
           value={nome}
           onChange={(e) => setNome(e.target.value)}
           style={{ marginLeft: '10px' }}
         />
      </div>
      <div style={{ marginLeft: '10px' }}>
      <label htmlFor="telefone">Telefone</label>
      <input
           type="string"
           placeholder="Telefone"
           value={telefone}
           onChange={(e) => setTelefone(e.target.value)}
           style={{ marginLeft: '10px' }}
         />
      </div>
       <div style={{ marginLeft: '10px' }}>
       <label htmlFor="valorhora">Valor da Hora</label>
         <input
           type="number"
           placeholder="Valor da Hora"
           value={valorHora}
           onChange={(e) => setValorHora(parseFloat(e.target.value))}
           style={{ marginLeft: '10px' }}
         />
        </div>
        <div style={{ marginLeft: '10px' }}>
        <label htmlFor="horassemana">Horas por Semana</label>
         <input
           type="number"
           placeholder="Horas por Semana"
           value={horasSemana}
           onChange={(e) => setHorasSemana(parseInt(e.target.value))}
           style={{ marginLeft: '10px' }}
         />
         <br/><NavLink exact="true" to="/resultado"> Resultado</NavLink>
         <Outlet />
       </div>
    </>
  );
}

export default TelaHorasSalario;
