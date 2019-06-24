import React from 'react'
import { connect } from 'react-redux'

const SongDetail = ({song}) => {
    if (!song) {
      return <h3>Select your song!</h3>
    }

    return (
      <div>
        <h3>{song.title}</h3>
        <p>{song.duration}</p>
      </div>
    )
  }


const mapStateToProps = (state) => {
  return {song: state.selectedSong}
}

export default connect(mapStateToProps)(SongDetail)
