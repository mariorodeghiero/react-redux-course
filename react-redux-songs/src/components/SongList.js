import React, { Component } from 'react'
import { connect } from 'react-redux'
class SongList extends Component {
  render() {
    return (
      <div>
        Song List
        {console.log("Teste props:", this.props)}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log("Teste mapState:", state);
  return {
    songs: state.songs
  };
}

export default connect(mapStateToProps)(SongList);
