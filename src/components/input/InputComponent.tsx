import { SearchIcon } from '../../icons'
import './inputComponent.scss'

const InputComponent = () => {
  return (
    <div className="inputComponent">
      <input type="text" placeholder="Search" className="paragraph" />
      <SearchIcon />
    </div>
  )
}

export default InputComponent
