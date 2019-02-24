import React from 'react'
import VideoItem from './VideoItem';

const VideoList = ({videos}) => {
  const renderList = videos.map((video, index) => {
    return <VideoItem key={index}/>
  })
  return (
    <div>
      {renderList}
    </div>
  )
}

export default VideoList
