import React from "react";
import { Link } from "react-router-dom"
import './styles.css'
import { Navbar } from 'react-bootstrap';
function Header(){

    return(
        
        <Navbar className="encabezado">
            <img className="logo" src="/img/logo.png" alt="Logo Monkey Music" /> 
            
            <nav className="menu">
                <ul className= "opciones">          
                    <li> <Link to = "/" > Inicio </Link> </li>
                    <li> <Link to = "/favoritos" > Favoritos </Link> </li>   
                    <li> <Link to = "/canciones" > Canciones </Link> </li>    
                    <li> <Link to = "/albumes" > Albumes </Link> </li>   
               </ul> 
            </nav>
            <h2 className="fraseheader">¡El lugar donde encontraras la mejor música!</h2>  
        </Navbar>
    )
}

export default Header;
