// Action creator

export const selectSong = () => {
  // return an action
  return {
    type: 'SONG_SELECTED',
    playload: song
  }
}

