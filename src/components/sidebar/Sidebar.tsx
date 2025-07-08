import { FC } from 'react'
import Subscriptions from '../subscriptions/Subscriptions'
import Navbar from '../navbar/Navbar'
import { SettingIcon } from '../../icons'
import { Link } from 'react-router-dom'
import './sidebar.scss'

const Sidebar: FC = () => {
  return (
    <div className="sidebarWrapper">
      <Navbar />
      <Subscriptions />

      <Link to="/" className="settingsLink">
        <SettingIcon />
        <span> Settings</span>
      </Link>
    </div>
  )
}

export default Sidebar
