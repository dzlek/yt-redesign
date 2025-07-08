import { FC } from 'react'
import './navbar.scss'
import {
  ChevronIcon,
  FavouritesIcon,
  GamesIcon,
  HistoryIcon,
  HomeIcon,
  LibraryIcon,
  LikedVideosIcon,
  MusicIcon,
  SubscriptionsIcon,
  TrendingIcon,
  WatchLaterIcon,
} from '../../icons'
import { Link } from 'react-router-dom'

const Navbar: FC = () => {
  const menuItems = [
    { icon: <HomeIcon />, text: 'Home', path: '/' },
    { icon: <TrendingIcon />, text: 'Trending', path: '/' },
    { icon: <SubscriptionsIcon />, text: 'Subscriptions', path: '/' },
    { icon: <LibraryIcon />, text: 'Library', path: '/' },
    { icon: <HistoryIcon />, text: 'History', path: '/history' },
    { icon: <WatchLaterIcon />, text: 'Watch later', path: '/' },
    { icon: <FavouritesIcon />, text: 'Favourites', path: '/' },
    { icon: <LikedVideosIcon />, text: 'Liked videos', path: '/' },
    { icon: <MusicIcon />, text: 'Music', path: '/' },
    { icon: <GamesIcon />, text: 'Games', path: '/' },
    { icon: <ChevronIcon />, text: 'Show more', path: '/' },
  ]

  return (
    <div className="navbarWrapper">
      <ul className="navbarList">
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link to={item.path} className="navbarLink">
              {item.icon}
              <p>{item.text}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Navbar
