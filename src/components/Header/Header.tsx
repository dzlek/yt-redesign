import { useContext } from 'react'
import { BurgerIcon, SearchIcon } from '../../icons'
import './header.scss'
import * as Avatar from '@radix-ui/react-avatar'
import { ThemeContext } from '../../context/ThemeContext'
import InputComponent from '../input/InputComponent'
import UserMenu from '../userMenu/UserMenu'
import { Link } from 'react-router-dom'

type HeaderProps = {
  onBurgerClick: () => void
}

const Header = ({ onBurgerClick }: HeaderProps) => {
  const { lightTheme } = useContext(ThemeContext)
  const logo = lightTheme ? './logo/LogoLight.svg' : './logo/LogoDark.svg'

  return (
    <div className="headerWrapper">
      <div className="headerItems">
        <div className="hideOnMobile">
          <BurgerIcon className="icon" onClick={onBurgerClick} />
        </div>
        <Link to={'/'} className="logo">
          <img src={logo} alt="Logo" />
        </Link>
        <div className="hideOnMobile inputWrapper">
          <InputComponent />
        </div>
      </div>
      <SearchIcon className="icon searchIconMobile hideOnDesktop" />
      <div className="hideOnMobile">
        <UserMenu />
      </div>
      <div className="hideOnDesktop">
        <Link to={'/channel'}>
          <Avatar.Root>
            <Avatar.Image src={'./avatars/user0.png'} alt={'User avatar'} className="userAvatar" />
            <Avatar.Fallback>{'user'}</Avatar.Fallback>
          </Avatar.Root>
        </Link>
      </div>
    </div>
  )
}

export default Header
