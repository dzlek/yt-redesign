import * as Avatar from '@radix-ui/react-avatar'
import './sidebarRecommended.scss'
import { Link } from 'react-router-dom'

type RecommendedChannel = {
  name: string
  avatar: string
}

type SidebarRecommendedProps = {
  items: RecommendedChannel[]
}

const SidebarRecommended = ({ items }: SidebarRecommendedProps) => {
  return (
    <div className="recommendedWrapper">
      <p className="title">Recommended channel</p>
      <ul className="recommendedList">
        {items.map((channel) => (
          <Link to={'/'} key={channel.name}>
            <li className="recommendedItem">
              <Avatar.Root>
                <Avatar.Image src={channel.avatar} alt={channel.name} className="avatar" />
                <Avatar.Fallback>{channel.name[0]}</Avatar.Fallback>
              </Avatar.Root>
              <p className="name">{channel.name}</p>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  )
}

export default SidebarRecommended
