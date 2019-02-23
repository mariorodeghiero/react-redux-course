import React, { Component } from 'react';
import SearchBar from './SearchBar';

import youtube from '../apis/youtube'

class App extends Component {

  onTermSubmit = term => {
    youtube.get('/search', {
      params: {
        q: term
      }
    })
  }


  render() {
    return (
      <div className="App">
        <h1>react youtube</h1>
        <SearchBar onFormSubmit={this.onTermSubmit}/>
      </div>
    );
  }
}

export default App;
