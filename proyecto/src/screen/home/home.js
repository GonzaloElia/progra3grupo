import React, { Component } from 'react'
import Canciones from '../../components/Canciones/Canciones.js';
import Albumes from '../../components/Albumes/Albumes.js';

class home extends Component {
  render() {
    return (
      <div>
        <Canciones/>
        <Albumes/>
      </div>
    )
  }
}
export default home