import React, { Component } from 'react'
//import Cancion from '../../components/Cancion/Cancion';
//import Albumes from '../../components/Albumes/Albumes';

class Favorites extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tracksfavoritos: [] //necesitamos un array de objetos literales con cada uno de los personajes
        }
    }
    componentDidMount(){
        let storage = localStorage.getItem('favoritos')
        if(storage !== null) {
            let parsedStorage = JSON.parsed(storage)
            console.log(parsedStorage)
        }
    }

        render() {
            return (
            <div>
                <h2>Lista de favoritos</h2>
            </div>
            )
        }
}
export default Favorites
