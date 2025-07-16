import VideoCard from '../videoCard/VideoCard'
import './authorFeedMobile.scss'

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

const AuthorFeedMobile = ({ author, slideWidth, slideHeight }: AuthorFeedProps) => {
  const paddingBottomRatio = (slideHeight / slideWidth) * 100

  return (
    <section className="authorFeedMobileWrapper">
      {author.feed.map((card, i) => (
        <div
          key={'card' + i}
          className="videoCardContainer"
          style={{ paddingBottom: `${paddingBottomRatio}%` }}
        >
          <div className="videoCardWrapper">
            <VideoCard {...card} />
          </div>
        </div>
      ))}
    </section>
  )
}

export default AuthorFeedMobile
