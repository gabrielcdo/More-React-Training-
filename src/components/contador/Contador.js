import React , { Component } from 'react' 
import './Contador.css'
import './Display'
import Display from './Display'
import Passo from './Passo'
export default class Contador extends Component{

    state = {
        passo: this.props.passo || 1,
        valor:this.props.valor ||0
    }
    inc = () => {
        this.setState({
            valor: this.state.valor + this.state.passo
        })
        this.state.valor++
    }
    dec = () => {
        this.setState({
            valor: this.state.valor - this.state.passo
        })
        this.state.valor--
    }
    mudarPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso
        })
    }
    render(){
        return(
        <div className="Contador">
            <h2>Contador</h2>
            
             <Passo passo={this.state.passo}
             onPassoChange={this.mudarPasso}></Passo>
             <Display valor={this.state.valor}></Display>
            <div>

                <button onClick={this.inc}>+</button>
                <button onClick={this.dec}>-</button>
            </div>

        </div>
        
        )
    }
}