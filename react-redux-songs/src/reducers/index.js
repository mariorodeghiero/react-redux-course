import { combineReducers } from 'redux'

const songsReducer = () => {
  return [
    { title: 'Song 1', duratuion: '2:30' },
    { title: 'Song 2', duratuion: '4:00' },
    { title: 'Song 3', duratuion: '3:30' },
    { title: 'Song 4', duratuion: '4:23' },
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
