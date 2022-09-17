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
            tracks: data.tracks.data.slice(0, 4)
          }
        ))
        .catch(error => console.log(error))
    }

    buscarTracks(nombre){
      fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/tracks/data/?title=${nombre}`)
      .then(resp => resp.json())
      .then(data => this.setState({
        tracks: data.results
      }))
      .catch(err => console.log(err))
    }

  render() {
    return (
      <div className='listado'>
        <Search filtrar={(nombre)=> this.buscarTracks(nombre)} />
        <h1>Canciones Populares</h1> 
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
export default Canciones