import { FC } from 'react'
import './navbar.scss'
import { HomeIcon, TrendingIcon } from '../../icons'

const Navbar: FC = () => {
  return (
    <div className="navbarWrapper">
      <ul className="navbarList">
        <li>
          <HomeIcon />
          <p>Home</p>
        </li>
        <li>
          <TrendingIcon />
          <p>Trending</p>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
