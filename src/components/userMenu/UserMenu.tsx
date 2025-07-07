import { CameraIcon, MenuIcon, NotificationsIcon } from '../../icons'
import './userMenu.scss'

const UserMenu = () => {
  return (
    <div className="userMenu">
      <div className="userMenuItems">
        <CameraIcon opacity={0.24} /> <MenuIcon opacity={0.24} />{' '}
        <NotificationsIcon opacity={0.24} />
      </div>
      <img src="../avatars/user1.png" alt="User avatar" />
    </div>
  )
}

export default UserMenu
