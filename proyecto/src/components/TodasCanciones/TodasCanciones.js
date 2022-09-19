import React, { Component } from 'react'
import Cancion from "../Cancion/Cancion"
import Search from '../Search/Search'

 class TodasCanciones extends Component {

    constructor(props) {
        super(props)
        this.state= {
            tracks: [],
        }
    }

    componentDidMount(){
        fetch('https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart')
        .then(res => res.json())
        .then(data => this.setState(
          {
            tracks: data.tracks.data.slice(0,15)
          }
        ))
        .catch(error => console.log(error))
    }

    buscarCanciones(nombre){
      fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/search?q=${nombre}`)
      .then(resp=>resp.json())
      .then(data=> this.setState({
        tracks: data.data
      }))
      .catch(err=>console.log(err))
    }

  render() {
    return (
      <div className='listado'>
        <h1>Todas las Canciones</h1> 
        <Search filtrar={(nombre)=> this.buscarCanciones(nombre)}/>
        <section className='card-container'>
          {
            this.state.tracks.length > 0 ?
              this.state.tracks.map((track, idx) => 
              <Cancion key={track + idx} info={track} //borrar={(name) => this.borrar(name)}
              />)
            :
            <h1>Cargando..</h1>
          }
        </section>
      </div>
      
    )
  }
}
export default TodasCanciones