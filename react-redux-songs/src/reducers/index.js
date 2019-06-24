import { combineReducers } from 'redux'

const songsReducer = () => {
  return [
    { title: 'Song 1', duration: '2:30' },
    { title: 'Song 2', duration: '4:00' },
    { title: 'Song 3', duration: '3:30' },
    { title: 'Song 4', duration: '4:23' },
  ]
}

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
}

const myPlayListReducer = () => {
  return [
    { title: 'Rock', duratuion: '5:30' },
    { title: 'Blues', duratuion: '6:10' }
  ]
}

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
  myPlayList: myPlayListReducer
})
