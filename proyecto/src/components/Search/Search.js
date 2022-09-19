import React, {Component} from 'react'
import { Form } from 'react-bootstrap'

class Search extends Component{
    constructor (props){
        super(props)
        this.state={
            valor:''
        }
    }

    evitarSubmit(event){
        event.preventDefault()
        console.log(event)
    }

    controlarCambios(event){
        this.setState({
            valor: event.target.value
        },
        ()=> this.props.filtrar(this.state.valor)
        )
        console.log(this.state.valor)
    }

    render(){
        return(
         <Form color='black' onSubmit={(e)=> this.evitarSubmit(e)}   >
            <input  placeholder='Buscar...' type='text' onChange={(e)=> this.controlarCambios(e) } value={this.state.valor} />
            
         </Form>
        )
    }
}
export default Search