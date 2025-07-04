import { HomeIcon, TrendingIcon } from "../../assets/icons";
import s from './navbar.module.scss'

export const Navbar = () => (
<nav className={s.navbarIcons}>
<li><HomeIcon/>Home</li>
<li><TrendingIcon/>Trending</li>
<li>Sidebar</li>
</nav>
);