import React from 'react';
import ReactDOM from 'react-dom';
import First from './components/First';
import Hello from './components/Hello'
import Parameter from './components/Parameter';
import './index.css'


ReactDOM.render(
  <div>
    
    <First/>
    <Parameter titulo= " Este é o Titulo " subtitulo = " Este é o Subtitulo "></Parameter>
    </div>
  ,
  document.getElementById('root')
);


