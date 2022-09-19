import React, { Component } from 'react'

class DetalleCancion extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: props.match.params.id,
            track: {}
            
        }
    }

    componentDidMount() {
        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/track/${this.state.id}`)
            .then(resp => resp.json())
            .then(data => this.setState({
                track: data,
                
            }))
            .catch(err => console.log(err))
            
    }


    render() {
        return (
            <div>
               <h1>{this.state.track.title}</h1>
               {/* <img src={this.state.track[0].album.cover} alt="" /> */}
               <h3>Duracion de la cancion: {this.state.track.duration} segundos</h3>
               <h3>Ranking Historico: {this.state.track.rank}</h3>
                <iframe src={this.state.track.preview} width="100%" height="260px" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>
               {/* <h3>Album: {this.state.track.album.title}</h3> */}
               
             
            </div>
        )
    }
}

export default DetalleCancion