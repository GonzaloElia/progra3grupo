import React from "react";
import { Link } from "react-router-dom"
import './styles.css'
import { Navbar } from 'react-bootstrap';
function Header(){

    return(
        
<<<<<<< HEAD
        <header className="encabezado">
            <Link to = "/" ><img className="logo" src="/img/logo.png" alt="Logo Monkey Music"/> </Link>
=======
        <Navbar className="encabezado">
            <img className="logo" src="/img/logo.png" alt="Logo Monkey Music" /> 
            
>>>>>>> 60d6c9adb567e498848314dba2743999302ed06b
            <nav className="menu">
                <ul className= "opciones">          
                    <li> <Link to = "/" > Inicio </Link> </li>
                    <li> <Link to = "/favorites" > Favoritos </Link> </li>   
                    <li> <Link to = "/canciones" > Canciones </Link> </li>    
                    <li> <Link to = "/albumes" > Albumes </Link> </li>   
               </ul> 
            </nav>
            <h2 className="fraseheader">¡El lugar donde encontraras la mejor música!</h2>  
        </Navbar>
    )
}

export default Header;
