import React, { Component } from 'react';
import './App.css';
import { selectSong } from './actions'
import SongList from './components/SongList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SongList></SongList>
      </div>
    );
  }
}

export default App;
