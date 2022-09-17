import React from 'react'

import Header from './components/Header/index.js';
import Footer from './components/Footer/index.js'

import Canciones from './components/Canciones/Canciones';
import Albumes from './components/Albumes/Albumes';
import { Route, Switch } from "react-router-dom"
import TodasCanciones from './components/TodasCanciones/TodasCanciones.js';

function App() {
  return (
    <div>
      <Header />
      
      <Canciones />
      <Albumes />

      <Switch>
      <Route path = "/canciones" component={TodasCanciones} />
      </Switch>


      <Footer />
    </div>
  );
}

export default App;