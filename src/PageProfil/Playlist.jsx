import React, { Component } from 'react';
import './Playlist.css';

class Playlist extends Component {
    render() {
      return (
        <div className="playlist">
          <iframe src="https://open.spotify.com/embed?uri=spotify:artist:3JVssppENfMD50NXuCF8Wk" width="300" height="175" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </div>
        
      );
    }
}








export default Playlist;