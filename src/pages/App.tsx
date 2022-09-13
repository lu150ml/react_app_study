import React from 'react';
import './App.css';
import Botao from '../componets/botao/botao'
import Formulario from '../componets/botao/formularios';
import Lista from '../componets/botao/lista/lista';
import './style.scss'

function App() {
  return (
    <div className="AppStyle">
      <Formulario />
      <Lista />
    </div>
  );
}

export default App;
