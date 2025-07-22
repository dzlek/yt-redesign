import { ChevronIcon } from '../../icons'
import { SearchIcon } from '../../icons/SearchIcon'

export const tabItems = [
  { value: 'home', label: 'Home', className: '' },
  { value: 'videos', label: 'Videos' },
  { value: 'playlists', label: 'Playlists' },
  { value: 'search', label: '', icon: <ChevronIcon />, className: 'hideOnDesktop' },
  { value: 'channels', label: 'Channels', className: 'hideOnMobile' },
  { value: 'discussion', label: 'Discussion', className: 'hideOnMobile' },
  { value: 'about', label: 'About', className: 'hideOnMobile' },
  { value: 'search', label: '', icon: <SearchIcon />, className: 'hideOnMobile' },
]
