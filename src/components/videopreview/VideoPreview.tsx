import React from 'react'
import './videoPreview.scss'

type VideoPreviewProps = {
  title: string
  duration: string
  imgSrc: string
}

const VideoPreview: React.FC<VideoPreviewProps> = ({ title, duration, imgSrc }) => {
  return (
    <div className="previewWrapper">
      <img src={imgSrc} alt={title} className="preview" />
      <span className="duration timeStamp">{duration}</span>
    </div>
  )
}

export default VideoPreview
