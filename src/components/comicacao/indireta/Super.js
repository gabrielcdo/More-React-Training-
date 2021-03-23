import React , { useState } from 'react'
import Sub from './Sub'

function Super(props){
        const [texto , setTexto] = useState('valor')
        const [num , setNum] = useState(0)

    function quandoClicar(valorgerado , texto){
        setNum(valorgerado)
        setTexto(texto)
    }
    return(
        <div>
        <h4>{texto}:{num}</h4>
        <Sub onClicar={quandoClicar}></Sub>
        </div>
    )
}
export default Super;