import React from 'react'
import './videoCard.scss'

type VideoCardProps = {
  title: string
  author: string
  views: string
  date: string
  duration: string
  thumbnail: string
  variant?: 'small' | 'large' | 'mobile'
}

const VideoCard: React.FC<VideoCardProps> = ({
  title,
  author,
  views,
  date,
  duration,
  thumbnail,
  variant = 'small',
}) => {
  return (
    <div className={`videoCardWrapper ${variant}`}>
      <div className="thumbnailWrapper">
        <img src={thumbnail} alt={title} className="thumbnail" />
        <span className="duration timeStamp">{duration}</span>
      </div>
      <div className="info">
        <h4 className="title h4">{title}</h4>
        <p className="subtitleCard">
          <span className="subtitle">
            {views} • {date}
          </span>
          <span className="subtitle">{author}</span>
        </p>
      </div>
    </div>
  )
}

export default VideoCard
