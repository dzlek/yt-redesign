import { FC } from 'react'
import { users } from '../../shared/subscriptions'
import * as Avatar from '@radix-ui/react-avatar'
import './subscriptions.scss'

const Subscriptions: FC = () => {
  return (
    <div className="subscriptionsWrapper">
      <h3 className="h3">Subscriptions</h3>
      <ul className="subscriptionsList">
        {users.map((user) => (
          <li className="subscriptionsItem" key={user.id + 'sub'}>
            <Avatar.Root>
              <Avatar.Image src={user.avatar} alt={user.name} className="avatar" />
              <Avatar.Fallback>{user.name[0]}</Avatar.Fallback>
            </Avatar.Root>
            <p className="paragraph">{user.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Subscriptions
