import Carousel from '../carousel/Carousel'
import * as Avatar from '@radix-ui/react-avatar'

import './authorFeed.scss'
import VideoCard from '../videoCard/VideoCard'
import { Link } from 'react-router-dom'

interface FeedItem {
  title: string
  author: string
  views: string
  date: string
  duration: string
  imgSrc: string
  link: string
}

interface AuthorFeedProps {
  author: {
    name: string
    avatar: string
    link: string
    subscribers: string
    feed: FeedItem[]
  }
  hasSubscription?: boolean
  slideWidth: number
  slideHeight: number
}

const AuthorFeed = ({
  author,
  hasSubscription = false,
  slideWidth,
  slideHeight,
}: AuthorFeedProps) => {
  return (
    <section className="sectionAuthorFeed">
      <div className="sectionHeader">
        <div className="sectionTitle">
          <Link to={author.link}>
            <Avatar.Root className="avatarRoot">
              <Avatar.Image src={author.avatar} alt={author.name} className="avatar" />
              <Avatar.Fallback className="avatarFallback">{author.name[0]}</Avatar.Fallback>
            </Avatar.Root>
          </Link>
          <div className="titleLine">
            <h2 className="h2">{author.name}</h2>
            {!hasSubscription && <div className="paragraph">Recommended channel for you</div>}
          </div>
        </div>

        {!hasSubscription && (
          <button className="subscribeButton">Subscribe {author.subscribers}</button>
        )}
      </div>

      <div className="carouselWrapper">
        <Carousel slideWidth={slideWidth} slideHeight={slideHeight}>
          {author.feed.map((card, i) => (
            <VideoCard key={i} {...card} />
          ))}
        </Carousel>
      </div>
    </section>
  )
}

export default AuthorFeed
