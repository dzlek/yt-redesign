import React from 'react'
import './videoCard.scss'
import VideoPreview from '../videopreview/VideoPreview'
import { Link } from 'react-router-dom'

type VideoCardProps = {
  title: string
  author: string
  views: string
  date?: string
  duration: string
  imgSrc: string
  link: string
  variant?: 'large' | 'small'
}

const VideoCard = ({
  title,
  author,
  views,
  date,
  duration,
  imgSrc,
  link,
  variant = 'small',
}: VideoCardProps) => {
  return (
    <Link to={link} className={`videoCardWrapper ${variant}`}>
      <VideoPreview title={title} duration={duration} imgSrc={imgSrc} />

      <div className={`info ${variant}`}>
        <h4 className={`cardTitle ellipsis ${variant}`}>{title}</h4>
        <p className={`subtitleCard ${variant}`}>
          <span className="viewsSubtitle subtitle">
            <span className="subtitle">{views}</span>
            {date && (
              <>
                <span className="subtitle">&bull;</span>
                <span className="subtitle">{date}</span>
              </>
            )}
          </span>
          <span className="authorSubtitle ellipsis subtitle">{author}</span>
        </p>
      </div>
    </Link>
  )
}

export default VideoCard
