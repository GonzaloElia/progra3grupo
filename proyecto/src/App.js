import React from 'react'

import Header from './components/Header/Header.js';
import Footer from './components/Footer/index.js';
import NotFoundPage from './components/NotFoundPage/NotFoundPage.js';

//importamos todas las sreens
import Home from './screen/Home/Home.js';
import Favorites from './screen/Favorites/Favorites.js';
import Detalle from './screen/Detalle/Detalle.js';

import { Route, Switch } from "react-router-dom"
import TodasCanciones from './components/TodasCanciones/TodasCanciones.js';

function App() {
  return (
    <div>
      <Header />
      
      <Switch>
        
      <Route path = "/canciones" component={TodasCanciones} />
      <Route path = "/" exact= {true} component={Home} />
      <Route path = "/detalle" component={Detalle} />
      <Route path = "/favoritos" component={Favorites} />
      <Route path="*" component={NotFoundPage} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;