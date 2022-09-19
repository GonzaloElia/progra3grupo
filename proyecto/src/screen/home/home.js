import React, { Component } from 'react'
import Canciones from '../../components/Canciones/Canciones.js';
import Albumes from '../../components/Albumes/Albumes.js';
import './home.css'
class home extends Component {
  render() {
    return (
      <div className='background'>
        <Canciones/>
        <Albumes/>
      </div>
    )
  }
}
export default home