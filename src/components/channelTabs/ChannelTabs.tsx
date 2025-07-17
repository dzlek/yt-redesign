import * as Tabs from '@radix-ui/react-tabs'
import './channelTabs.scss'
import { tabItems } from './tabItems'

const ChannelTabs = () => {
  return (
    <Tabs.Root defaultValue="home">
      <div className="tabsHeader">
        <Tabs.List className="tabsList">
          {tabItems.map(({ value, label, icon }) => (
            <Tabs.Trigger key={value} value={value} className="tabTrigger">
              {icon} {label}
              <span className="tabUnderline" />
            </Tabs.Trigger>
          ))}
        </Tabs.List>
      </div>
    </Tabs.Root>
  )
}

export default ChannelTabs
