import Carousel from '../carousel/Carousel'
import VideoCard from '../videoCard/VideoCard'

import './recommendedFeed.scss'

interface FeedItem {
  title: string
  author: string
  views: string
  date: string
  duration: string
  imgSrc: string
  link: string
}

interface RecommendedFeedProps {
  feed: FeedItem[]
  slideWidth: number
  slideHeight: number
}

const RecommendedFeed = ({ feed, slideWidth, slideHeight }: RecommendedFeedProps) => {
  return (
    <section className="sectionRecommended">
      <div className="sectionHeader">
        <div className="sectionTitle">
          <div className="h2">Recommended</div>
        </div>
      </div>

      <div className="carouselWrapper">
        <Carousel slideWidth={slideWidth} slideHeight={slideHeight}>
          {feed.map((card, i) => (
            <VideoCard key={i} {...card} />
          ))}
        </Carousel>
      </div>
    </section>
  )
}

export default RecommendedFeed
