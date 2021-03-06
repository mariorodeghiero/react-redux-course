import streams from '../apis/streams'
import { SIGN_IN, SIGN_OUT, CREATE_STREAM, FETCH_STREAMS, EDIT_STREAM, FETCH_STREAM, DELETE_STREAM } from './types'

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId
  }
}

export const signOut = () => {
  return {
    type: SIGN_OUT
  }
}

export const createStream = (formValues) => async (dispatch) => {
  const response = await streams.post('/streams', formValues)
  dispatch({
    type: CREATE_STREAM,
    payload: response.data
  })
}

export const fetchStreams = (formValues) => async (dispatch) => {
  const response = await streams.post('/streams', formValues)
  dispatch({
    type: FETCH_STREAMS,
    payload: response.data
  })
}
