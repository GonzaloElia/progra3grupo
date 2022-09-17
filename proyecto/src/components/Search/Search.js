import React, {Component} from 'react'

class Search extends Component {
    constructor(props){
        super(props)
        this.state={
            valor:''
        }
    }
    
    evitarSubmit(event){
        event.preventDefault()
    }

    controlarCambios(event){
        this.setState({
            valor: event.target.value
        },
        () => this.props.filtrar(this.state.valor)
        )
    }

    render(){
        return(
            <form onSubmit={(evento)=> this.evitarSubmit(evento) }>
                <input type='text' onChange={(evento) => this.controlarCambios(evento)} value={this.state.valor}/>
            </form>
        )
    }
}
export default Search