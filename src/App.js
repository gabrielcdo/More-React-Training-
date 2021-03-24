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
import Cimput from './components/form/Impute';
import Contador from './components/contador/Contador';
import Mega from './components/mega/Mega';

function App (props){

    return (
      
        <div className="App">
          <div>
            <h1>Fundamentos React</h1>
          </div>
          <div className="cards">
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
         <Card titulo="#08 - Comunicação Indireta" color="#21130d">
         <Super></Super>
         </Card>  
         <Card titulo="#09 - Input" color="#8B658B">
         <Cimput></Cimput>
         </Card>  
         <Card titulo="#10 - Contador" color="#8B0000">
         <Contador passo={10}></Contador>
         </Card>  
         <Card titulo="#11 - Mega" color="#FF7F24">
         <Mega></Mega>
         </Card>  
         <Card titulo="#12 - video" color="#FF7F24">
         <Mega></Mega>
         </Card>  



    
         </div>
    </div>
    )
}

export default App;