import React from "react";
import { Link } from "react-router-dom"
import './styles.css'

function Header(){

    return(
        <header>
            <img className="logo" src="/img/logo.png" alt="Logo Monkey Music" /> 
            
            <Link to = "/" > Home </Link>
            <Link to = "/favoritos" > Favoritos </Link>
            <Link to = "/canciones" > Series </Link>
            <Link to = "/albumes" > albumes </Link>
        </header>
    )
}

export default Header;