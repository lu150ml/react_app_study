import React from 'react';
import './App.css';
import Botao from'./componets/botao'
import Formulario from './componets/botao/formularios';
import Lista from './componets/botao/lista/lista';

function App() {
  return (
    <div className="App">
      <Formulario />
      <Lista />
    </div>
  );
}

export default App;
