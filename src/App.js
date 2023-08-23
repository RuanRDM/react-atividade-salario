import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import TelaInicial from './components/TelaInicial';
import TelaHorasSalario from './components/TelaHorasSalario';
import TelaResultado from './components/TelaResultado';
import AppContext from './AppContext';

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        index: true,
        element: <TelaInicial/>
      },
      {
        path: '/horas-salario',
        element: <TelaHorasSalario />,
      },
      {
        path: '/resultado',
        element: <TelaResultado />,
      },
    ],
  },
]);

function App() {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [valorHora, setValorHora] = useState('');
  const [horasSemana, setHorasSemana] = useState('');

  return (
    <AppContext.Provider
      value={{
        nome,
        setNome,
        telefone,
        setTelefone,
        valorHora,
        setValorHora,
        horasSemana,
        setHorasSemana
      }}
    >
      <RouterProvider router={router} />
    </AppContext.Provider>
  );
}

export default App;
