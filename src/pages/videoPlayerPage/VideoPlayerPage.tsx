import { useState } from 'react'
import { Link } from 'react-router-dom'
import ToggleButton from '../../components/toggleButton/ToggleButton'

const VideoPlayerPage = () => {
  const [isOn, setIsOn] = useState(true)

  function toggleAction() {
    setIsOn(!isOn)
    console.log('condition' + isOn)
  }

  return (
    <h2>
      VideoPlayerPage <Link to="/"></Link>
      <ToggleButton checked={isOn} onCheckedChange={toggleAction} />
    </h2>
  )
}

export default VideoPlayerPage
