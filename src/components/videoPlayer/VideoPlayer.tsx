import './videoPlayer.scss'

type VideoPlayerProps = {
  videoId: string
}

const VideoPlayer = ({ videoId }: VideoPlayerProps) => {
  return (
    <div className="videoPlayer">
      <iframe
        className="videoFrame"
        src={`https://www.youtube.com/embed/${videoId}`}
        allowFullScreen
      ></iframe>
    </div>
  )
}

export default VideoPlayer
