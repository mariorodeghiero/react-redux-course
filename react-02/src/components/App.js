import React, { Component } from 'react';
import unsplash from '../api/unsplash'
import '../App.css';
import SearchBar from './SearchBar'

class App extends Component {

  state = { images: [] }

   onSearchSubmit = async (term) => {
    const response = await unsplash.get('search/photos', {
       params: { query: term },
    });
    this.setState({ images: response.data.results})
    console.log("Teste", response.data.results)
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onSearchSubmit}/>
        <p>Found: {this.state.images.length} images</p>
      </div>
    );
  }
}

export default App;
