import React, { Component } from 'react'
//import { Route } from 'react-router-dom'
import './cancion.css'

class cancion extends Component {

    constructor(props) {
        super(props)
        this.state ={
          more: false,
          favorite: false
        }
    }

  more(){
    if(this.state.more){
      this.setState({
        more: false
      })
    } else {
      this.setState({
        more: true
      })
    }
  }
  
  addFavorites(id){
    let favStorage = localStorage.getItem('favoritos')

    if(favStorage === null){
      let favArr = [id]
      let arrToString = JSON.stringify(favArr)
      localStorage.setItem('favoritos', arrToString)
    } else {
      let parsedArr = JSON.parse(favStorage)
      parsedArr.push(id)
      let arrToString = JSON.stringify(parsedArr)
      localStorage.setItem('favoritos', arrToString)
    }
    this.setState({
      favorite: true
    })
  }

  removeFavorites(id){
    let favStorage = localStorage.getItem('favoritos')
    let parsedStorage = JSON.parse(favStorage)
    let filterStorage = parsedStorage.filter(elm => elm !== id)

    let storageToString = JSON.stringify(filterStorage)

    localStorage.setItem('favoritos', storageToString)

    this.setState({
      favorite: false
    })
  }
  render() {
    return (
      <div className="character-card">
        <img src={this.props.info.album.cover}  alt=''/>
        <h3>{this.props.info.title}</h3>
        
        {
          this.state.more ?
          <p>Album: {this.props.info.album.title}</p>
          :
          ''
          }

        {
          this.state.favorite ?
            <button onClick={()=> this.removeFavorites(this.props.info.id)}>Sacar de favoritos</button>
          :
            <button onClick={()=> this.addFavorites(this.props.info.id)}>Añadir a favoritos</button>
        }
        
        <button onClick={()=>this.more()}>Ver Más</button>
        <button onClick={()=> this.props.borrar(this.props.info.id)}> Borrar </button>
      </div>
    )
  }
}
export default cancion