import './App.css'
import React from 'react'
import First from './components/First';
import Hello from './components/Hello'
import Card from './components/layout/Card';
import Parameter from './components/Parameter';
import Sons from './components/Sons';

function App (props){

    return (
        <div className="App">
    <Card titulo= "#01 Primeiro Componente">
    <First/>
    </Card>
    <Card titulo= "#02 Componente com parametro">
    <Parameter titulo= " Este é o Titulo "subtitulo = " Este é o Subtitulo "></Parameter>
    </Card>
    <Card titulo= "#03 Componentes com filhos">
    <Sons>
      <ul>
        <li>hello</li>
        <li>Bia</li>
        <li>Leticia</li>
        <li>Gabriel</li>
      </ul>
    </Sons>
    </Card>
    
    
    </div>
    )
}

export default App;