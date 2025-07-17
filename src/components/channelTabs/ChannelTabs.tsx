import * as Tabs from '@radix-ui/react-tabs'
import { SearchIcon } from '../../icons'
import './channelTabs.scss'

const ChannelTabs = () => {
  return (
    <Tabs.Root defaultValue="home">
      <div className="tabsHeader">
        <Tabs.List className="tabsList">
          <Tabs.Trigger value="home" className="tabTrigger black">
            Home
            <span className="tabUnderline" />
          </Tabs.Trigger>
          <Tabs.Trigger value="videos" className="tabTrigger">
            Videos
            <span className="tabUnderline" />
          </Tabs.Trigger>
          <Tabs.Trigger value="playlists" className="tabTrigger">
            Playlists
            <span className="tabUnderline" />
          </Tabs.Trigger>
          <Tabs.Trigger value="channels" className="tabTrigger">
            Channels
            <span className="tabUnderline" />
          </Tabs.Trigger>
          <Tabs.Trigger value="discussion" className="tabTrigger">
            Discussion
            <span className="tabUnderline" />
          </Tabs.Trigger>
          <Tabs.Trigger value="about" className="tabTrigger">
            About
            <span className="tabUnderline" />
          </Tabs.Trigger>

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
