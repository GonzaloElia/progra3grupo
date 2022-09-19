import React from 'react'

import Header from './components/Header/Header.js';
import Footer from './components/Footer/index.js';
import NotFoundPage from './components/NotFoundPage/NotFoundPage.js';

//importamos todas las sreens
import Home from './screen/Home/Home.js';
import Favorites from './screen/Favorites/Favorites.js';

import { Route, Switch } from "react-router-dom"
import TodasCanciones from './components/TodasCanciones/TodasCanciones.js';
import TodosAlbumes from './components/TodosAlbumes/TodosAlbumes.js';
import DetalleCancion from './components/DetalleCancion/DetalleCancion.js';
import DetalleAlbum from './components/DetalleAlbum/DetalleAlbum.js';


function App() {
  return (
    <div>
      <Header />
      
      <Switch>
        
      <Route path = "/canciones" component={TodasCanciones} />
      <Route path = "/albumes" component={TodosAlbumes} />
      <Route path = "/" exact= {true} component={Home} />
      <Route path = "/favoritos" component={Favorites} />
      <Route path= "/detallecancion/:id" component={DetalleCancion} />
      <Route path= "/detallealbum/:id" component={DetalleAlbum} />
      <Route path="*" component={NotFoundPage} />


      </Switch>

      <Footer />
    </div>
  );
}

export default App;