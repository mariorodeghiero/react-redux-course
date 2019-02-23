import React, { Component } from 'react';
import SearchBar from './SearchBar';

import youtube from '../apis/youtube'

class App extends Component {
  state = {
    videos: []
  }

  onTermSubmit = async term => {
   const response = await youtube.get('/search', {
      params: {
        q: term
      }
    })

    this.setState({
      videos: response.data.items
    })
  }


  render() {
    return (
      <div className="App">
        <h1>react youtube</h1>
        <SearchBar onFormSubmit={this.onTermSubmit}/>
        I have {this.state.videos.length} videos.
      </div>
    );
  }
}

export default App;
