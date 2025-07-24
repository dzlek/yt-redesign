import * as Avatar from '@radix-ui/react-avatar'
import { CameraIcon, MenuIcon, NotificationsIcon } from '../../icons'
import './userMenu.scss'
import { Link } from 'react-router-dom'

const UserMenu = () => {
  return (
    <div className="userMenu">
      <div className="userMenuItems">
        <Link to={'/'}>
          <CameraIcon className="icon" />
        </Link>
        <Link to={'/'}>
          <MenuIcon className="icon" />
        </Link>
        <Link to={'/'}>
          <div className="notificationContainer">
            <NotificationsIcon className="icon" />
            <span>3</span>
          </div>
        </Link>
      </div>
      <Link to={'/channel'}>
        <Avatar.Root>
          <Avatar.Image src={'./avatars/user0.png'} alt={'User avatar'} className="userAvatar" />
          <Avatar.Fallback>{'user'}</Avatar.Fallback>
        </Avatar.Root>
      </Link>
    </div>
  )
}

export default UserMenu
