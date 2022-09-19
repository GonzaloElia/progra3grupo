import React from 'react';
import { Link } from 'react-router-dom';
import '../Header/styles.css';
// import PageNotFound from '../assets/images/PageNotFound';
class NotFoundPage extends React.Component{
    render(){
        return <div >
            {/* <img src={NotFound}  alt=' '/> */}
            <p style={{textAlign:"center"}}>
              La página que buscas no pudo encontrarse. 
              
            </p>
            <p  style={{textAlign:"center"}}>
            <Link  to="/" className= "opciones">Volver a Inicio </Link>

            </p>
          </div>;
    }
}
export default NotFoundPage;