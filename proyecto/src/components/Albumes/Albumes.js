import React, { Component } from 'react'
import Album from "../Album/Album"

 class Albumes extends Component {

    constructor(props) {
        super(props)
        this.state= {
            albums: [],
        }
    }

    componentDidMount(){
        fetch('https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart')
        .then(res => res.json())
        .then(data => this.setState(
          {
            albums: data.albums.data.slice(0, 4),
          }
        ))
        .catch(error => console.log(error))

    }
  render() {
    return (
      
    
      <section className='card-container'>
        {
          this.state.albums.length > 0 ?
            this.state.albums.map((album, idx) => 
            <Album key={album + idx} info={album} //borrar={(name) => this.borrar(name)}
            />)
          :
          <h1>Cargando..</h1>
        }
      </section>

    )
  }
}
export default Albumes