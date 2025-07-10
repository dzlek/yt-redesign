import React from 'react'
import './videoCard.scss'
import VideoPreview from '../videopreview/VideoPreview'
import { Link } from 'react-router-dom'

type VideoCardProps = {
  title: string
  author: string
  views: string
  date: string
  duration: string
  imgSrc: string
}

const VideoCard: React.FC<VideoCardProps> = ({ title, author, views, date, duration, imgSrc }) => {
  return (
    <Link to="/" className="videoCardWrapper">
      <div className="previewWrapper">
        <VideoPreview title={title} duration={duration} imgSrc={imgSrc} />
      </div>
      <div className="info">
        <h4 className="title">
          <span className="ellipsis h4">{title}</span>
        </h4>
        <p className="subtitleCard">
          <span className="subtitle">
            {views} • {date}
          </span>
          <span className="subtitle ellipsis">{author}</span>
        </p>
      </div>
    </Link>
  )
}

export default VideoCard
