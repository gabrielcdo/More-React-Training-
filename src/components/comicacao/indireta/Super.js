import React from 'react'
import Sub from './Sub'

function Super(props){
    function quandoClicar(valorgerado , texto){
        console.log('Ação!!!!')
        console.log(valorgerado)
        console.log(texto)
    }
    return(
        <div>
        <h4>Valor</h4>
        <Sub onClicar={quandoClicar}></Sub>
        </div>
    )
}
export default Super;