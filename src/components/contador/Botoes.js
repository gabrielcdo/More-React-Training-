import React from 'react' 

function Butoes(props){
    return(
        <div>
        <button onClick={props.onInc}>+</button>
        <button onClick={props.onDec}>-</button>
        </div>
    )
}
export default Butoes;