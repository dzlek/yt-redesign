import React from 'react'
import './videoBlock.scss'
import VideoPreview from '../videopreview/VideoPreview'
import { Link } from 'react-router-dom'

type VideoBlockProps = {
  title: string
  description: string
  views: string
  date: string
  duration: string
  imgSrc: string
  link: string
}

const VideoBlock: React.FC<VideoBlockProps> = ({
  title,
  description,
  views,
  date,
  duration,
  imgSrc,
  link,
}) => {
  return (
    <Link to={link} className="videoBlockWrapper">
      <div className="previewContainer">
        <VideoPreview title={title} duration={duration} imgSrc={imgSrc} />
      </div>

      <div className="videoBlockContent">
        <h2 className="h2 videoBlockTitle ellipsis-multiline">{title}</h2>
        <p className="videoBlockDescription ellipsis-multiline">{description}</p>
        <div className="videoBlockSubtitle">
          <span>{views}</span>
          <span>&bull;</span>
          <span>{date}</span>
        </div>
      </div>
    </Link>
  )
}

export default VideoBlock
