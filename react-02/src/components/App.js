import React, { Component } from 'react';
import axios from 'axios'
import '../App.css';
import SearchBar from './SearchBar'

class App extends Component {

  onSearchSubmit(term) {
    axios.get('https://api.unsplash.com/search/photos', {
       params: {query: term},
       headers: {
         Authorization: 'Client-ID 545ba910c3a8ab7083c164f8427dfb4d653d83d12e8bc8b7228d202b4290a218'
       }
    })
    console.log("Teste", term)
  }
  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onSearchSubmit}/>
      </div>
    );
  }
}

export default App;
