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

  const menuItems = [
    {
      icon: lightTheme ? <HomeIcon /> : <HomeIcon opacity={0.8} />,
      text: 'Home',
      path: '/',
    },
    {
      icon: lightTheme ? <TrendingIcon /> : <TrendingIcon opacity={0.8} />,
      text: 'Trending',
      path: '/',
    },
    {
      icon: lightTheme ? <SubscriptionsIcon /> : <SubscriptionsIcon opacity={0.8} />,
      text: 'Subscriptions',
      path: '/',
    },
    {
      icon: lightTheme ? <LibraryIcon /> : <LibraryIcon opacity={0.8} />,
      text: 'Library',
      path: '/',
    },
    {
      icon: lightTheme ? <HistoryIcon /> : <HistoryIcon opacity={0.8} />,
      text: 'History',
      path: '/history',
    },
    {
      icon: lightTheme ? <WatchLaterIcon /> : <WatchLaterIcon opacity={0.8} />,
      text: 'Watch later',
      path: '/',
    },
    {
      icon: lightTheme ? <FavouritesIcon /> : <FavouritesIcon opacity={0.8} />,
      text: 'Favourites',
      path: '/',
    },
    {
      icon: lightTheme ? <LikedVideosIcon /> : <LikedVideosIcon opacity={0.8} />,
      text: 'Liked videos',
      path: '/',
    },
    {
      icon: lightTheme ? <MusicIcon /> : <MusicIcon opacity={0.8} />,
      text: 'Music',
      path: '/',
    },
    {
      icon: lightTheme ? <GamesIcon /> : <GamesIcon opacity={0.8} />,
      text: 'Games',
      path: '/',
    },
    {
      icon: lightTheme ? <ChevronIcon /> : <ChevronIcon opacity={0.8} />,
      text: 'Show more',
      path: '/',
    },
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
