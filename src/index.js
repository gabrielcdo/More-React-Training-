import React from 'react';
import ReactDOM from 'react-dom';
import First from './components/First';
import Hello from './components/Hello'
import Card from './components/layout/Card';
import Parameter from './components/Parameter';
import Sons from './components/Sons';
import './index.css'


ReactDOM.render(
  <div>
    <Card titulo= "Exercício X">
      Conteudo
    </Card>
    
    {/*
    <Sons>
      <ul>
        <li>hello</li>
        <li>Bia</li>
        <li>Leticia</li>
        <li>Gabriel</li>
      </ul>
    </Sons>
    <First/>
    <Parameter titulo= " Este é o Titulo " subtitulo = " Este é o Subtitulo "></Parameter>
    <Parameter titulo= " Opa " subtitulo = "Epa "></Parameter>*/}
    </div>
  ,
  document.getElementById('root')
);


