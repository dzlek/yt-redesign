import { FC, useContext } from 'react'
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
import { ThemeContext } from '../../context/ThemeContext'

const Navbar: FC = () => {
  const { lightTheme } = useContext(ThemeContext)
  const iconOpacity = lightTheme ? undefined : 0.8

  const menuItems = [
    { icon: <HomeIcon opacity={iconOpacity} />, text: 'Home', path: '/' },
    { icon: <TrendingIcon opacity={iconOpacity} />, text: 'Trending', path: '/' },
    { icon: <SubscriptionsIcon opacity={iconOpacity} />, text: 'Subscriptions', path: '/' },
    { icon: <LibraryIcon opacity={iconOpacity} />, text: 'Library', path: '/' },
    { icon: <HistoryIcon opacity={iconOpacity} />, text: 'History', path: '/history' },
    { icon: <WatchLaterIcon opacity={iconOpacity} />, text: 'Watch later', path: '/' },
    { icon: <FavouritesIcon opacity={iconOpacity} />, text: 'Favourites', path: '/' },
    { icon: <LikedVideosIcon opacity={iconOpacity} />, text: 'Liked videos', path: '/' },
    { icon: <MusicIcon opacity={iconOpacity} />, text: 'Music', path: '/' },
    { icon: <GamesIcon opacity={iconOpacity} />, text: 'Games', path: '/' },
    { icon: <ChevronIcon opacity={iconOpacity} />, text: 'Show more', path: '/' },
  ]

  return (
    <div className="navbarWrapper">
      <ul className="navbarList">
        {menuItems.map((item, index) => (
          <li key={'nav' + index}>
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
