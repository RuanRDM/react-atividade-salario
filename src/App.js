import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TelaInicial from './components/TelaInicial';
import TelaHorasSalario from './components/TelaHorasSalario';
import TelaResultado from './components/TelaResultado';
import AppContext from './AppContext';

function App() {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');

  return (
    <AppContext.Provider
      value={{
        nome,
        setNome,
        telefone,
        setTelefone,
      }}
    >
      <Router>
        <Route path="/" exact component={TelaInicial} />
        <Route path="/horas-salario" component={TelaHorasSalario} />
        <Route path="/resultado" component={TelaResultado} />
      </Router>
    </AppContext.Provider>
  );
}

export default App;
