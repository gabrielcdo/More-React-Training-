import React from 'react'
import produtos from '../data/produtos.js'

function Repetitation(props){
    function getProdutosListItem(){
    return produtos.map(prod => {
        return <li key = {prod.id}>{prod.id} - {prod.nome} - {prod.preco}</li>
    })
    }
    
return(
    <div>
        <h2>Repetição</h2>
        <ul>
         {getProdutosListItem()}
        </ul>
    </div>
)
}
export default Repetitation;