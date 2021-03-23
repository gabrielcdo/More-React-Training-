import React from 'react'
import Filho from './Filho'

function Pai(props){
    return(
        <div>
        <Filho {...props}>Joao</Filho>
        <Filho sobrenome={props.sobrenome}>Maria</Filho>
        <Filho sobrenome="Silva">Pedro</Filho>
        </div>
    )
}
export default Pai;