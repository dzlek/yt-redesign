import { CameraIcon, MenuIcon, NotificationsIcon } from '../../icons'
import './userMenu.scss'

const UserMenu = () => {
  return (
    <div className="userMenu">
      <div className="userMenuItems">
        <CameraIcon className="icon" /> <MenuIcon className="icon" />
        <NotificationsIcon className="icon" />
      </div>
      <img src="../avatars/user1.png" alt="User avatar" />
    </div>
  )
}

export default UserMenu
