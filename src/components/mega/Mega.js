import React , { useState } from 'react'

function Mega(props){

    const [num1 , setNum1] = useState('0')
    const [num2 , setNum2] = useState('0')
    const [num3 , setNum3] = useState('0')
    const [num4 , setNum4] = useState('0')
    const [num5 , setNum5] = useState('0')
    const [num6 , setNum6] = useState('0')
    function randNumbers(){
        setNum1(Math.floor(Math.random() * 60))  
        setNum2(Math.floor(Math.random() * 60))
        setNum3(Math.floor(Math.random() * 60))
        setNum4(Math.floor(Math.random() * 60))
        setNum5(Math.floor(Math.random() * 60))
        setNum6(Math.floor(Math.random() * 60))
        
       };
    return(
        <div>
    <h2>Tente a Sorte</h2>
    <button onClick={randNumbers}>clique aqui</button>
    <p>Seus números</p>
    <span>{num1+'-'+num2+'-'+num3+'-'+num4+'-'+num5+'-'+num6}</span>
    </div>
    
    )
}
export default Mega;