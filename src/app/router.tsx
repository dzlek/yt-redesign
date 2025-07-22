import { Routes, Route, Navigate } from 'react-router-dom'

import HomePage from '../pages/homePage/HomePage'
import ChannelPage from '../pages/channelPage/ChannelPage'
import VideoPlayerPage from '../pages/videoPlayerPage/VideoPlayerPage'

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/channel" element={<ChannelPage />} />
      <Route path="/player" element={<VideoPlayerPage />} />
      <Route path="*" element={<Navigate to={''} replace />} />
    </Routes>
  )
}

export default AppRouter
