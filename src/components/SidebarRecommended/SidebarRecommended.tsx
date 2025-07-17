import * as Avatar from '@radix-ui/react-avatar'
import './sidebarRecommended.scss'

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
      <h3 className="title">Recommended channel</h3>
      <ul className="recommendedList">
        {items.map((channel) => (
          <li className="recommendedItem" key={channel.name}>
            <Avatar.Root>
              <Avatar.Image src={channel.avatar} alt={channel.name} className="avatar" />
              <Avatar.Fallback>{channel.name[0]}</Avatar.Fallback>
            </Avatar.Root>
            <p className="name">{channel.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SidebarRecommended
