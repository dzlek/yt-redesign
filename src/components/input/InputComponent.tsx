import { SearchIcon } from '../../icons'
import './inputComponent.scss'

const InputComponent = () => {
  return (
    <div className="inputWrapper">
      <input type="text" placeholder="Search" className="input" />
      <SearchIcon className="icon" />
    </div>
  )
}

export default InputComponent
