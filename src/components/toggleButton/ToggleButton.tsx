import * as Switch from '@radix-ui/react-switch'
import './toggleButton.scss'

type ToggleProps = {
  checked: boolean
  onCheckedChange: (value: boolean) => void
}

const ToggleButton = ({ checked, onCheckedChange }: ToggleProps) => {
  return (
    <Switch.Root className={'toggleBtn'} checked={checked} onCheckedChange={onCheckedChange}>
      <Switch.Thumb className={'circle'} />
    </Switch.Root>
  )
}

export default ToggleButton
