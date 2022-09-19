import React, { Component } from 'react'
import './cancion.css'
import { Link } from 'react-router-dom';



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
    let favStorage = localStorage.getItem('tracksfavs')

    if(favStorage === null){
      let favArr = [id]
      let arrToString = JSON.stringify(favArr)
      localStorage.setItem('tracksfavs', arrToString)
    } else {
      let parsedArr = JSON.parse(favStorage)
      parsedArr.push(id)
      let arrToString = JSON.stringify(parsedArr)
      localStorage.setItem('tracksfavs', arrToString)
    }
    this.setState({
      favorite: true
    })
  }

  removeFavorites(id){
    let favStorage = localStorage.getItem('tracksfavs')
    let parsedStorage = JSON.parse(favStorage)
    let filterStorage = parsedStorage.filter(elm => elm !== id)

    let storageToString = JSON.stringify(filterStorage)

    localStorage.setItem('tracksfavs', storageToString)

    this.setState({
      favorite: false
    })
  }
  render() {
    return (
      <div className="character-card">
         <img src={this.props.info.album.cover} alt="" />
        <Link to={`/detallecancion/${this.props.info.id}`} >
          <h4 className='nombre'>{this.props.info.title}</h4>
          <p className={this.state.verMas}>{this.props.info.album.title}</p> </Link>
        
        <div>
        
        {
          this.state.more ?
          <p>Album: {this.props.info.album.title}</p>
          :
          ''
          }

        {
          this.props.isInFavs ?
          <button onClick={()=> this.props.borrar(this.props.info.id)}> Borrar de favoritos </button>
          : 
          this.state.favorite ?
            <button className='btn' onClick={()=> this.removeFavorites(this.props.info.id)}>Sacar de favoritos</button >
          :
            <button className='btn' onClick={()=> this.addFavorites(this.props.info.id)}>Añadir a favoritos</button >
        }
            
            <button className='btn' onClick={()=>this.more()}>Ver Más</button >
       
        
      </div>
      </div>
    )
  }
}
export default cancion