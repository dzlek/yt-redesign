import { FC, useContext } from 'react'
import Subscriptions from '../subscriptions/Subscriptions'
import Navbar from '../navbar/Navbar'
import { SettingIcon } from '../../icons'
import { Link } from 'react-router-dom'
import './sidebar.scss'
import { menuItems } from '../navbar/navbarMenuItems'
import { ThemeContext } from '../../context/ThemeContext'

const Sidebar: FC = () => {
  const { lightTheme } = useContext(ThemeContext)
  const iconOpacity = lightTheme ? 1 : 0.8

  return (
    <>
      <div className="sidebarWrapper hideOnMobile">
        <Navbar />
        <Subscriptions />

        <Link to="/" className="settingsLink">
          <SettingIcon />
          <span> Settings</span>
        </Link>
      </div>

      <div className="mobileSidebar hideOnDesktop">
        {menuItems.slice(0, 4).map((item, index) => {
          const IconComponent = item.Icon
          return (
            <Link key={index} to={item.path} className="mobileSidebarIcon">
              <IconComponent opacity={iconOpacity} />
              <span className="iconLabel">{item.text}</span>
            </Link>
          )
        })}
      </div>
    </>
  )
}

export default Sidebar
