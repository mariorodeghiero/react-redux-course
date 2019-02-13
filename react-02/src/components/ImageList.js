import React, { Component } from 'react'

const ImageList = (props) => {
    
  const images = props.images.map(({ description, id, urls }) => {
    return <img key={id} src={urls.regular} alt={description}/>
  })
  
  return (
      <div class="ui small images">
        {images}
      </div>
    )
  }

export default ImageList;