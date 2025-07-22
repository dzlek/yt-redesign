import * as Avatar from '@radix-ui/react-avatar'
import { CameraIcon, MenuIcon, NotificationsIcon } from '../../icons'
import './userMenu.scss'

const UserMenu = () => {
  return (
    <div className="userMenu">
      <div className="userMenuItems">
        <CameraIcon className="icon" />
        <MenuIcon className="icon" />
        <div className="notificationContainer">
          <NotificationsIcon className="icon" />
          <span>3</span>
        </div>
      </div>
      <Avatar.Root>
        <Avatar.Image src={'./avatars/user0.png'} alt={'User avatar'} className="userAvatar" />
        <Avatar.Fallback>{'user'}</Avatar.Fallback>
      </Avatar.Root>
    </div>
  )
}

export default UserMenu
