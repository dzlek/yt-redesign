import * as Avatar from '@radix-ui/react-avatar'
import './channelPage.scss'
import AuthorFeed from '../../components/authorFeed/AuthorFeed'
import margaretPhelpsAuthor from '../../shared/margaretPhelpsAuthor'
import { NotificationsIcon } from '../../icons'

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
            <Avatar.Fallback>{user.name[0]}</Avatar.Fallback>
          </Avatar.Root>
          <div className="authorInfo">
            <h2 className="authorName h2">{user.name}</h2>
            <div className="paragraph">{user.subscribers} subscribed </div>
          </div>
        </div>
        <div className="channelInteractions">
          <NotificationsIcon />
          <button className="subscribeButton">Subscribe {user.subscribers}</button>
        </div>
      </div>

      <div className="channelContainer">
        <div className="channelTabs paragraph">
          ChannelTabs
          {/* <ChannelTabs/> */}
        </div>
        <div className="videoBlock">VideoBlock{/*  <VideoBlock/> */}</div>

        <div className="sidebarRecommendedWrapper">
          sidebarRecommended
          {/* <SidebarRecommended items={recommendedSadebarChannels} /> */}
        </div>
      </div>

      <div className="authorFeedWrapper">
        <AuthorFeed author={user} slideWidth={250} slideHeight={200} hasSubscription={true} />
      </div>
    </div>
  )
}

export default ChannelPage
