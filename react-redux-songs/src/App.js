import React, { Component } from 'react';
import './App.css';
import { selectSong } from './actions'
import SongList from './components/SongList';

class App extends Component {
  render() {
    return (
      <div className="ui container grid">
        <div className="ui row">
          <div className="column eight wide">
              <SongList/>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
