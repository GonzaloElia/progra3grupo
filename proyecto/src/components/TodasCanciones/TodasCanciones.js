import React, { Component } from 'react'
import Cancion from "../Cancion/Cancion"

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
            tracks: data.tracks.data
          }
        ))
        .catch(error => console.log(error))
    }

  render() {
    return (
      <div className='listado'>
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
export default TodasCanciones