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
}

const AuthorFeedMobile = ({ author }: AuthorFeedProps) => {
  return (
    <section className="authorFeedMobileWrapper">
      {author.feed.map((card, i) => (
        <div key={'card' + i}>
          <div className="videoCardWrapperMobile">
            <VideoCard {...card} />
          </div>
        </div>
      ))}
    </section>
  )
}

export default AuthorFeedMobile
