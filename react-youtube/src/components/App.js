import React, { Component } from 'react';
import SearchBar from './SearchBar';

import moduleName from 'module'

class App extends Component {

  onTermSubmit = (term) => {

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
