import {
  HomeIcon,
  TrendingIcon,
  SubscriptionsIcon,
  LibraryIcon,
  HistoryIcon,
  WatchLaterIcon,
  FavouritesIcon,
  LikedVideosIcon,
  MusicIcon,
  GamesIcon,
  ChevronIcon,
} from '../../icons'

export interface MenuItem {
  Icon: React.ComponentType<{ opacity?: number }>
  text: string
  path: string
}

export const menuItems: MenuItem[] = [
  { Icon: HomeIcon, text: 'Home', path: '/' },
  { Icon: TrendingIcon, text: 'Trending', path: '/' },
  { Icon: SubscriptionsIcon, text: 'Subscriptions', path: '/' },
  { Icon: LibraryIcon, text: 'Library', path: '/' },
  { Icon: HistoryIcon, text: 'History', path: '/history' },
  { Icon: WatchLaterIcon, text: 'Watch later', path: '/' },
  { Icon: FavouritesIcon, text: 'Favourites', path: '/' },
  { Icon: LikedVideosIcon, text: 'Liked videos', path: '/' },
  { Icon: MusicIcon, text: 'Music', path: '/' },
  { Icon: GamesIcon, text: 'Games', path: '/' },
  { Icon: ChevronIcon, text: 'Show more', path: '/' },
]
