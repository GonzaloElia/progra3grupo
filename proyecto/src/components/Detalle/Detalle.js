import React, {Component} from "react";

class Detalle extends Component{
    constructor(props){
        super(props);
        this.state = {
            detalle: false,
            favoritos: false

            
        }
    } 
    componentDidMount(){
        let Storage = localStorage.getItem('cancionesFavoritas')
    let storageParseado = JSON.parse(Storage)
    if(storageParseado !== null){
      let esFavorita = storageParseado.includes(this.props.id) 
      if(esFavorita) {
        this.setState({
          favorito:true
        })
      }
    }
        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/track/${this.props.match.params.id}?api_key=c3451d12c3b3b8da10b8bc0fa02aa537`)
        .then(resp => resp.json())
        .then(data=>console.log(data))
        .then(data => 
              this.setState
            ({
            detalle: data,
            
        })  )
        
  
    
    }

    agregarFavoritos(id){
        let Storage = localStorage.getItem('cancionesFavoritas')
    
        if(Storage === null){
          let array = [id]
          let arrayAString = JSON.stringify(array)
          localStorage.setItem('cancionesFavoritas', arrayAString)
        } else {
          let arrayParseado = JSON.parse(Storage)
          arrayParseado.push(id)
          let arrayAString = JSON.stringify(arrayParseado)
          localStorage.setItem('cancionesFavoritas', arrayAString)
        }
    
        this.setState({
          favorito:true
        })
      }
    
      sacarFavoritos(id){
        let Storage = localStorage.getItem('cancionesFavoritas')
        let storageParseado = JSON.parse(Storage) 
        let filtroStorage = storageParseado.filter(elemento => elemento !== id)
    
        let storageAString = JSON.stringify(filtroStorage)
    
        localStorage.setItem('cancionesFavoritas', storageAString)
    
        this.setState({
          favorito: false
        })
      }

    render(){
        return(
        <div className="card_detalle">
            {this.state.detalle ?
            <main className="detalle"> 
              {/* /* <div>
                  <img src={`https://image.tmdb.org/t/p/w342/${this.state.detalle.poster_path}`} alt=""></img>
              </div> */ }
              <div className="datos_detalle">
                  <h1>{this.state.detalle.title}</h1>                    
                  <b>Fecha De Estreno:</b> {this.state.detalle.release_date}
                  <p> <b>Puesto:</b> {this.state.detalle.rank}</p>
                  <p> <b>Duracion:</b> {this.state.detalle.duration} segundos</p>
                  {
                  this.state.favorito?
                  <button onClick={()=> this.sacarFavoritos(this.state.detalle.id) }> Eliminar de favoritos</button>
                  :
                  <button onClick={() => this.agregarFavoritos(this.state.detalle.id)} > Agregar a Favoritos</button>
                  }                   
              </div>    
            </main>: <> <h1>Cargando..</h1> </> }
        </div>
        
        )
    } 
}

export default Detalle