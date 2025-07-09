import { Link } from 'react-router-dom'
import VideoCard from '../components/videoCard/VideoCard'

const HomePage = () => {
  return (
    <div>
      HomePage <Link to="/"></Link>
      <VideoCard
        title="A Brief History Of Creation Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse neque leo, feugiat quis odio gravida, consequat maximus ex. Sed nibh nisi, dapibus vel convallis at, scelerisque in tel"
        author="Dollie Blair Lorem ipsum dolor si "
        date="3 days ago"
        views="80k views"
        duration="4:15"
        thumbnail="/images/сover1.png"
        variant="small"
      />
    </div>
  )
}

export default HomePage
