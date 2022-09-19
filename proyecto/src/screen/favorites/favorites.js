import React, { Component } from 'react'
import TracksFavs from '../../components/TracksFavs/TracksFavs';
import AlbumsFavoritos from '../../components/AlbumsFavoritos/AlbumsFavoritos';

class favorites extends Component {



    render() {
    return (
      <div>
        <TracksFavs/>
        <AlbumsFavoritos/>

      </div>
    )
  }
}
export default favorites
