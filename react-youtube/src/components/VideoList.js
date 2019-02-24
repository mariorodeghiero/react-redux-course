import React from 'react'
import VideoItem from './VideoItem';

const VideoList = ({videos}) => {
  const renderList = videos.map((video, index) => {
    return <VideoItem key={index} video={video}/>
  })
  return (
    <div className="ui relaxed divided list">
      {renderList}
    </div>
  )
}

export default VideoList
