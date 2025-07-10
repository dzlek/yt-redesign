import React from 'react'
import './videoPreview.scss'

type VideoPreviewProps = {
  title: string
  duration: string
  thumbnail: string
}

const VideoPreview: React.FC<VideoPreviewProps> = ({ title, duration, thumbnail }) => {
  return (
    <div className="previewWrapper">
      <img src={thumbnail} alt={title} className="preview" />
      <span className="duration timeStamp">{duration}</span>
    </div>
  )
}

export default VideoPreview
