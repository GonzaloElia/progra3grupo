import React,{Component} from 'react'
import Canciones from '../Canciones';
import './style.css'

class TodasPelis extends Component {
    constructor(props){
        super(props)
        this.state={
            data: [],
            verMas: "hide",
            pagina: 1
            
        }
    }

    componentDidMount(){
        
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=9ea8026abecb25639235199cb1388857&language=en-US&page=${this.state.pagina}`)
        .then(resp => resp.json())
        .then(data => this.setState({
            data: data.results
        }))
        .catch(err => console.log(err)) 
    }

    siguientePagina(){
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=9ea8026abecb25639235199cb1388857&language=en-US&page=${this.state.pagina}`)
        .then(res => res.json())
        .then(data => this.setState({
            data: this.state.data.concat(data.results),
            pagina: this.state.pagina + 1
        }))
        .catch(err => console.log(err))
    }

  render() {
    return (
        <>
            <div className='peliculas'>
                <h1>TODAS LAS PELÍCULAS</h1>
            </div>

            <section className="card-container">
                {
                    this.state.data.length > 0 ?
                        this.state.data.map((key, idx) => 
                        <Canciones 
                        key={key + idx} 
                        name={key.title} 
                        image={key.poster_path}
                        descripcion={key.overview}
                        id = {key.id}
                        agregar = {(id) => this.agregarFavoritos(id)}
                        />):
                    <h1>Cargando..</h1>
                }
            </section>
            <div className='boton_card'>
                <button className='boton' onClick={()=> this.siguientePagina()}> Cargar Más </button>
            </div>
        </>
    )
  }
}

export default TodasPelis