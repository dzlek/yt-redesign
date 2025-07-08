import { FC, useContext } from 'react'
import { BurgerIcon } from '../../icons'
import './header.scss'
import { ThemeContext } from '../../context/ThemeContext'
import InputComponent from '../input/InputComponent'
import UserMenu from '../userMenu/UserMenu'

const Header: FC = () => {
  const { lightTheme } = useContext(ThemeContext)
  const logo = lightTheme ? '/logo/LogoLight.svg' : '/logo/LogoDark.svg'

  return (
    <div className="headerWrapper">
      <div className="headerItems">
        <BurgerIcon className="icon" />
        <a href="/" className="logo">
          <img src={logo} alt="Logo" />
        </a>
        <InputComponent />
      </div>
      <UserMenu />
    </div>
  )
}

export default Header
