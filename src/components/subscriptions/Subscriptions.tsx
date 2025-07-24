import { FC } from 'react'
import { users } from '../../shared/subscriptions'
import * as Avatar from '@radix-ui/react-avatar'
import './subscriptions.scss'
import { Link } from 'react-router-dom'

const Subscriptions: FC = () => {
  return (
    <div className="subscriptionsWrapper">
      <h3 className="h3">Subscriptions</h3>
      <ul className="subscriptionsList">
        {users.map((user) => (
          <Link to={user.link} key={user.id + 'sub'}>
            <li className="subscriptionsItem">
              <Avatar.Root>
                <Avatar.Image src={user.avatar} alt={user.name} className="avatar" />
                <Avatar.Fallback>{user.name[0]}</Avatar.Fallback>
              </Avatar.Root>
              <p className="paragraph">{user.name}</p>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  )
}

export default Subscriptions
