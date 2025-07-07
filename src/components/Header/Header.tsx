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
    <p className="header">
      <div className="headerItems">
        <BurgerIcon />
        <img className="logo" src={logo} alt="Logo" />
        <InputComponent />
      </div>
      <UserMenu />
    </p>
  )
}

export default Header
