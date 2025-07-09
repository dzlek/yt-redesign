import { FC, useContext } from 'react'
import './navbar.scss'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../../context/ThemeContext'
import { menuItems } from './navbarMenuItems'

const Navbar: FC = () => {
  const { lightTheme } = useContext(ThemeContext)
  const iconOpacity = lightTheme ? undefined : 0.8

  return (
    <div className="navbarWrapper">
      <ul className="navbarList">
        {menuItems.map((item, index) => {
          const IconComponent = item.Icon

          return (
            <li key={'nav' + index}>
              <Link to={item.path} className="navbarLink">
                <IconComponent opacity={iconOpacity} />
                <p>{item.text}</p>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Navbar
