import React, { Component } from 'react'

const ImageList = (props) => {
    
  const images = props.images.map( (image, index) => {
    return <img key={index} src={image.urls.regular} alt="test"/>
  })
  
  return (
      <div class="ui small images">
        {images}
      </div>
    )
  }

export default ImageList;