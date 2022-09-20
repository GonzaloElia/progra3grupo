import React, { Component } from 'react'
import Album from '../../components/Album/Album';
import estilos from "../AlbumsFavoritos/albumsfavoritos.css"

class AlbumsFavoritos extends Component {
    constructor(props) {
        super(props)
        this.state = {
          Albumfavs: [], //necesitamos un array de objetos literales con cada uno de los personajes
          favorito: true
        }
    }
    
    componentDidMount() {
        
        let storage = localStorage.getItem('Albumsfavoritos')
        
        if(storage !== null) {
            let parsedStorage = JSON.parse(storage)
            //console.log(parsedStorage)
        Promise.all(
            parsedStorage.map(elm =>
            { return (
                fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/album/${elm}`)
                .then(res => res.json())
                .then(data => data)
              )
            })
        )
        .then(data => this.setState({
            Albumfavs: data
        }))
        .catch(err => console.log(err))
      }
    }

    borrar(id) {
        let favStorage = localStorage.getItem('Albumsfavoritos')
        let parsedStorage = JSON.parse(favStorage) 
        let filterStorage = parsedStorage.filter(elm => elm !== id) 
    
        let storageToString = JSON.stringify(filterStorage)
    
        localStorage.setItem('Albumsfavoritos', storageToString)
    
        this.setState({
          favorito: false})
        
      let AlbumsBorrados = this.state.Albumfavs.filter(track => track.id !== id);
        this.setState({
            Albumfavs: AlbumsBorrados,
        })
      }


    render() {
            return (
            <div>
        <h2 className='titulo'> Albums favoritos </h2>
        <section className="card-container">
        {
          this.state.Albumfavs.length > 0 ?
          this.state.Albumfavs.map((album, idx) =>
          <Album key={album + idx} info={album} isInFavs = {true} borrar={(id) => this.borrar(id)} />
            )
            : <p> No hay albums en sección favoritos </p>

        }
        </section>
            </div>
            )
        }
}
export default AlbumsFavoritos
