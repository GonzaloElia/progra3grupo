import React from 'react'

import Header from './components/Header/index.js';
import Footer from './components/Footer/index.js'

import Canciones from './components/Canciones/Canciones';
import Albumes from './components/Albumes/Albumes';
import { Route, Switch } from "react-router-dom"

function App() {
  return (
    <div>
      <Header />

      <Route path = "/" component={Canciones} />
      <Route path = "/" component={Albumes} />

      <Footer />
    </div>
  );
}

export default App;