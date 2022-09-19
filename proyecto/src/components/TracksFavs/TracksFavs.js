import React, { Component } from 'react'
import Cancion from '../../components/Cancion/Cancion';

class TracksFavs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tracksfavoritos: [] //necesitamos un array de objetos literales con cada uno de los tracks
        }
    }
    
    componentDidMount() {
        
        let storage = localStorage.getItem('tracksfavs')
        
        if(storage !== null) {
            let parsedStorage = JSON.parse(storage)
            //console.log(parsedStorage)
        Promise.all(
            parsedStorage.map(elm =>
            { return (
                fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/track/${elm}`)
                .then(res => res.json())
                .then(data => data)
              )
            })
        )
        .then(data => this.setState({
            tracksfavoritos: data
        }))
        .catch(err => console.log(err))
      }
    }

    borrar(id) {
        let favStorage = localStorage.getItem('tracksfavs')
        let parsedStorage = JSON.parse(favStorage) 
        let filterStorage = parsedStorage.filter(elm => elm !== id) 
    
        let storageToString = JSON.stringify(filterStorage)
    
        localStorage.setItem('tracksfavs', storageToString)
    
        this.setState({
          favorito: false})
        
      let tracksBorrados = this.state.tracksfavoritos.filter(track => track.id !== id);
        this.setState({
          tracksfavoritos: tracksBorrados,
        })
      }


    render() {
            return (
            <div>
        <h2> Tracks favoritos </h2>
        <section className="card-container">
        {
          this.state.tracksfavoritos.length > 0 ?
          this.state.tracksfavoritos.map((track, idx) =>
          <Cancion key={track + idx} info={track} isInFavs = {true} borrar={(id) => this.borrar(id)} />
            )
            : <p> No hay tracks en sección favoritos </p>

        }
        </section>
            </div>
            )
        }
}
export default TracksFavs
