import { useState } from 'react'
import ToggleButton from '../toggleButton/ToggleButton'
import VideoPreview from '../videopreview/VideoPreview'
import './nextVideoFeed.scss'
import { Link } from 'react-router-dom'

interface FeedItem {
  title: string
  author: string
  views: string
  duration: string
  imgSrc: string
  link: string
}

interface NextVideoFeedProps {
  author: {
    name: string
    avatar: string
    link: string
    subscribers: string
    feed: FeedItem[]
  }
}

const NextVideoFeed = ({ author }: NextVideoFeedProps) => {
  const [isOn, setIsOn] = useState(false)
  return (
    <section className="nextVideoFeedWrapper">
      <div className="videoPreviewHeader">
        <h1 className="h1 next">Next</h1>
        <div className="toggle">
          <span>AUTOPLAY</span>
          <span>
            <ToggleButton
              checked={isOn}
              onCheckedChange={(isOn) => {
                setIsOn(isOn)
              }}
            />
          </span>
        </div>
      </div>
      <div className="nextVideoFeed">
        {author.feed.map((card, i) => (
          <Link to={'/channel'} key={'card' + i}>
            <div className="nextVideoPreviewWrapper">
              <VideoPreview {...card} />
            </div>
            <div className="videoPreviewInfo">
              <h4 className="videoPreviewTitle h2 ellipsis">{card.title}</h4>
              <p className="subtitleCard ">
                <span className="viewsSubtitle ">{card.views}</span>
                <span className=" ellipsis authorSubtitle">{card.author}</span>
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default NextVideoFeed
