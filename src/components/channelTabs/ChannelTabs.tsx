import * as Tabs from '@radix-ui/react-tabs'
import { SearchIcon } from '../../icons'
import './channelTabs.scss'
import { tabItems } from './tabItems'

const ChannelTabs = () => {
  return (
    <Tabs.Root defaultValue="home">
      <div className="tabsHeader">
        <Tabs.List className="tabsList">
          {tabItems.map(({ value, label }) => (
            <Tabs.Trigger key={value} value={value} className="tabTrigger">
              {label}
              <span className="tabUnderline" />
            </Tabs.Trigger>
          ))}
          <Tabs.Trigger value="search" className="tabTrigger">
            <SearchIcon />
            <span className="tabUnderline" />
          </Tabs.Trigger>
        </Tabs.List>
      </div>
    </Tabs.Root>
  )
}

export default ChannelTabs
