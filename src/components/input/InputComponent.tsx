import { SearchIcon } from '../../icons'
import './inputComponent.scss'

const InputComponent = () => {
  return (
    <div className="inputComponent">
      <input type="text" placeholder="Search" className="input" />
      <SearchIcon />
    </div>
  )
}

export default InputComponent
