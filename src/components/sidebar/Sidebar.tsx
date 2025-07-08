import { FC } from 'react'
import Subscriptions from '../subscriptions/Subscriptions'
import Navbar from '../navbar/Navbar'

const Sidebar: FC = () => {
  return (
    <div className="sidebar">
      <Navbar />
      <Subscriptions />
    </div>
  )
}

export default Sidebar
