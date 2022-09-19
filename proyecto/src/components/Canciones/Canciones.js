import React, { Component } from 'react'
import Cancion from "../Cancion/Cancion"
import './styles.css'
import Search from '../Search/Search'
 class Canciones extends Component {

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
            tracks: data.tracks.data.slice(0, 4),
            mode: 'no-cors'
          }
        ))
        .catch(error => console.log(error))
    }

    

    // borrar(name){
    //   let cancionesFiltradas = this.state.tracks.data.filter(cancion => cancion.name  !== name)
    //   this.setState({
    //     tracks: cancionesFiltradas
    //   })
    // }
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
        <h1>Canciones Populares</h1> 
        <Search filtrar={(nombre)=> this.buscarCanciones(nombre)}/>

        <section  className='card-container'>
          {
            this.state.tracks.length > 0 ?
              this.state.tracks.map((key, idx) => 
              <Cancion
               key={key + idx}
               info={key} 
               id={key.id}
              />)
            :
            <h1>Cargando..</h1>
          }
          
        </section>
      </div>
      
    )
  }
}
export default Canciones