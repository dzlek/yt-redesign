import { useState } from 'react'
import ToggleButton from '../toggleButton/ToggleButton'
import './nextVideoFeed.scss'
import VideoCard from '../videoCard/VideoCard'

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

          <ToggleButton
            checked={isOn}
            onCheckedChange={(isOn) => {
              setIsOn(isOn)
            }}
          />
        </div>
      </div>
      <div className="nextVideoFeed">
        {author.feed.map((card, i) => (
          <div className="nextVideoCardWrapper" key={'card' + i}>
            <VideoCard variant="large" {...card} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default NextVideoFeed
