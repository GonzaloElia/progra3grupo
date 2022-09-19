import React from 'react'

import Header from './components/Header/Header.js';
import Footer from './components/Footer/index.js';
import { Navbar } from 'react-bootstrap';

//importamos todas las sreens
import Home from './screen/Home/Home.js';
import Favorites from './screen/Favorites/Favorites.js';
<<<<<<< HEAD
=======
import Detalle from './screen/Detalle/Detalle.js';
>>>>>>> 60d6c9adb567e498848314dba2743999302ed06b

import { Route, Switch } from "react-router-dom"
import TodasCanciones from './components/TodasCanciones/TodasCanciones.js';
import TodosAlbumes from './components/TodosAlbumes/TodosAlbumes.js';
import Detalle from './components/Detalle/Detalle.js';

function App() {
  return (
    <div>
      <Header />
      
      <Switch>
        
      <Route path = "/canciones" component={TodasCanciones} />
      <Route path = "/albumes" component={TodosAlbumes} />
      <Route path = "/" exact= {true} component={Home} />
      <Route path = "/detalle" component={Detalle} />
      <Route path = "/favoritos" component={Favorites} />
      <Route path= "/detalle/:id" component={Detalle} />

      </Switch>

      <Footer />
    </div>
  );
}

export default App;