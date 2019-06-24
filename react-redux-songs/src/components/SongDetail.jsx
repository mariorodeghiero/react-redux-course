import React, { Component } from 'react'
import { connect } from 'react-redux'

class SongDetail extends Component {
  render() {
    return (
      <div>
        {console.log("TEste: ", this.props)}
        <p>song detail</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {song: state.selectedSong}
}

export default connect(mapStateToProps)(SongDetail)
