import './App.css'
import React from 'react'
import First from './components/basics/First';

import Card from './components/layout/Card';
import Parameter from './components/basics/Parameter';
import Sons from './components/basics/Sons';
import Repetitation from './components/layout/Repetitation';
import Condition from './components/basics/Condition';
import Pai from './components/comicacao/direta/Pai';
import Super from './components/comicacao/indireta/Super';

function App (props){

    return (
      
        <div className="App">
    <Card titulo= "#01 Primeiro Componente" color="#6A5ACD">
    <First/>
    </Card>
    <Card color="#fe4a49" titulo= "#02 Componente com parametro">
    <Parameter titulo= " Este é o Titulo "subtitulo = " Este é o Subtitulo "></Parameter>
    </Card>
    <Card titulo= "#03 Componentes com filhos" color="#2ab7ca ">
    <Sons>
      <ul>
        
        <li>Bia</li>
        <li>Leticia</li>
        <li>Gabriel</li>
      </ul>
    </Sons>
    </Card>
    <Card titulo="#04 - Repetição" color="#fed766">
           <Repetitation></Repetitation>
        </Card>
     <Card titulo="#05 - Condicional V1" color="#e6e6ea">
         <Condition numero ={10}></Condition>
         </Card>   
         <Card titulo="#06 - Condicional V2" color="#f6abb6">
         <Condition numero ={9}></Condition>
         </Card>   
         <Card titulo="#07 - Comunicação Direta" color="#854442">
         <Pai sobrenome="Oliveira"></Pai>
         </Card>  
         <Card titulo="#07 - Comunicação Direta" color="#854442">
         <Super></Super>
         </Card>  
    
    
    </div>
    )
}

export default App;