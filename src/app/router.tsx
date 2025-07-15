// src/app/router.tsx
import { Routes, Route } from 'react-router-dom'

import HomePage from '../pages/homePage/HomePage'
import ChannelPage from '../pages/channelPage/ChannelPage'
import VideoPlayerPage from '../pages/VideoPlayerPage/VideoPlayerPage'

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/channel" element={<ChannelPage />} />
      <Route path="/player" element={<VideoPlayerPage />} />
    </Routes>
  )
}

export default AppRouter
