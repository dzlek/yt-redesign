// src/app/router.tsx
import { Routes, Route } from 'react-router-dom'

import HomePage from '../pages/HomePage'
import ChannelPage from '../pages/ChannelPage'
import VideoPlayerPage from '../pages/VideoPlayerPage'

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
