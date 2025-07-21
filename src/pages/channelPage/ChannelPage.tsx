import * as Avatar from '@radix-ui/react-avatar'
import './channelPage.scss'
import margaretPhelpsAuthor from '../../shared/margaretPhelpsAuthor'
import { NotificationsIcon } from '../../icons'
import ChannelTabs from '../../components/channelTabs/ChannelTabs'
import VideoBlock from '../../components/videoBlock/VideoBlock'
import channelPageData from '../../shared/channelPageData'
import SidebarRecommended from '../../components/sidebarRecommended/SidebarRecommended'
import { recommendedSadebarChannels } from '../../shared/recommendedSadebarChannels'
import RecommendedFeed from '../../components/recommendedFeed/recommendedFeed'
import AuthorFeedMobile from '../../components/authorFeedMobile/AuthorFeedMobile'

const ChannelPage = () => {
  const user = margaretPhelpsAuthor

  return (
    <div className="channelPageWrapper">
      <div className="channelBanner">
        <img src="../images/channel-back.png" alt="Channel Banner" />
      </div>

      <div className="channelInfo">
        <div className="authorHeader">
          <Avatar.Root>
            <Avatar.Image src={user.avatar} alt={user.name} className="avatar" />
            <Avatar.Fallback className="avatarFallback">{user.name[0]}</Avatar.Fallback>
          </Avatar.Root>
          <div className="authorInfo">
            <h2 className="authorName h2">{user.name}</h2>
            <div className="paragraph subscribed">{user.subscribers} subscribed </div>
          </div>
        </div>
        <div className="channelInteractions">
          <NotificationsIcon className="hideOnMobile" />
          <button className="subscribeButton">Subscribe {user.subscribers}</button>
        </div>
      </div>

      <div className="channelContainerAndSidebar">
        <div className="channelContainer">
          <div className="channelTabs">
            <ChannelTabs />
          </div>
          <div className="videoBlock hideOnMobile">
            <VideoBlock {...channelPageData} />
          </div>
        </div>

        <div className="sidebarRecommendedWrapper hideOnMobile">
          <SidebarRecommended items={recommendedSadebarChannels} />
        </div>
      </div>

      <div className="recommendedFeedWrapper hideOnMobile">
        <RecommendedFeed
          title={user.name + ' videos'}
          feed={user.feed}
          slideWidth={250}
          slideHeight={200}
        />
      </div>

      <div className="authorFeedContainer hideOnDesktop">
        <AuthorFeedMobile author={user} />
      </div>
    </div>
  )
}

export default ChannelPage
