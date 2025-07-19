import './videoPlayerPage.scss'
import SidebarRecommended from '../../components/sidebarRecommended/SidebarRecommended'
import { recommendedSadebarChannels } from '../../shared/recommendedSadebarChannels'

const VideoPlayerPage = () => {
  return (
    <div className="videoPlayerWrapper">
      <div className="mainContent">
        <div className="videoPlayer">
          {/* <VideoIframe /> */}
          {/* <VideoInfo /> */}
        </div>

        <div className="sidebarRecommendedWrapper hideOnMobile">
          <SidebarRecommended items={recommendedSadebarChannels} />
        </div>
      </div>

      <div className="recommendedFeedWrapper hideOnMobile">
        {/* <RecommendedFeed title="Next" feed={author.feed} slideWidth={250} slideHeight={200} /> */}
      </div>
    </div>
  )
}

export default VideoPlayerPage
