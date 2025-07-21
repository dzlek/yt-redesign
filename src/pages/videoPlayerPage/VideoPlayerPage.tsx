import './videoPlayerPage.scss'

import NextVideoFeed from '../../components/nextVideoFeed/NextVideoFeed'
import nextVideosAuthor from '../../shared/nextVideosAuthor'
import VideoPlayer from '../../components/videoPlayer/VideoPlayer'

import { DisLikeIcon, LikeIcon, ShareIcon } from '../../icons'
import { MoreIcon } from '../../icons/MoreIcon'
import * as Avatar from '@radix-ui/react-avatar'
import { Link } from 'react-router-dom'
import foodAndDrinkVideo from '../../shared/foodAndDrinkVideo'

const VideoPlayerPage = () => {
  const video = foodAndDrinkVideo

  return (
    <div className="videoPlayerPageWrapper">
      <div className="mainContent">
        <div className="videoPlayer">
          <VideoPlayer videoId={video.videoId} />
        </div>

        <div className="videoInfo">
          <div className="videoHeader">
            <h1 className="h1 title">{video.title}</h1>
            <div className="videoSubTitle">
              <span className="subtitle">{video.views}</span>
              <div className="subtitleInteractionsButtons">
                <button className="socialBtn subtitle">
                  <LikeIcon /> {video.likes}
                </button>
                <button className="socialBtn subtitle">
                  <DisLikeIcon /> {video.disLikes}
                </button>
                <button className="socialBtn subtitle">
                  <ShareIcon /> Share
                </button>
                <button className="moreBtn">
                  <MoreIcon />
                </button>
              </div>
            </div>
          </div>

          <div className="videoDescriptionAndSubscribe">
            <div className="videoDescription">
              <div className="videoChannel">
                <Link to={video.authorLink}>
                  <Avatar.Root className="avatarRoot">
                    <Avatar.Image src={video.authorAvatar} alt={video.author} className="avatar" />
                    <Avatar.Fallback className="avatarFallback">{video.author[0]}</Avatar.Fallback>
                  </Avatar.Root>
                </Link>
                <div className="videoAuthorAndDescription">
                  <h2 className="authorSubtitle h2">{video.author}</h2>
                  <span className="published hideOnMobile">Published on {video.publishedDate}</span>
                  <span className="published hideOnDesktop">{video.subscribers} subcsribed</span>
                  <span className=" description ellipsis-multiline hideOnMobile">
                    {video.description}
                  </span>
                  <span className="paragraph showMore hideOnMobile">Show more</span>
                </div>
              </div>
            </div>
            <span className="subscribeLnk hideOnDesktop">Subscribe</span>
            <button className="subscribeButton hideOnMobile">Subscribe {video.subscribers}</button>
          </div>
        </div>
      </div>

      <div className="NextVideoFeedWrapper">
        <NextVideoFeed author={nextVideosAuthor} />
      </div>
    </div>
  )
}

export default VideoPlayerPage
