    
import React , { useState } from 'react'

function MegaT(props){
    const min = 1
    const max = 60
    const [ numeros , setNumeros ] = useState(Array(props.qtdeNumero).fill(0))
    function gerarNumerosNaoContido(array){
        const novoNumero = parseInt(Math.random() * (max - min)) + 1
        return array.includes(novoNumero) ? gerarNumerosNaoContido(array) : novoNumero
    }
    function gerarNumeros(){
       const novoArray = Array(props.qtdeNumero)
       .fill(0)
       .reduce(a => [...a, gerarNumerosNaoContido(a)], [])
       .sort((a,b) => a-b)
        setNumeros(novoArray)
    }
    
    
    return(
        <div>
            <h3>Mega</h3>
            <h4>{numeros.join(' ')}</h4>
            <button onClick={gerarNumeros}>Gerar Número</button>
        </div>
    )
}
export default MegaT;