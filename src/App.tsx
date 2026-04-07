import Text from "./components/text"
import TrashIcon from "./assets/icons/Trash.svg?react"
import CheckIcon from "./assets/icons/Check.svg?react"
import PlusIcon from "./assets/icons/Plus.svg?react"
import SpinnerIcon from "./assets/icons/Spinner.svg?react"
import PencilIcon from "./assets/icons/Pencil.svg?react"
import XIcon from "./assets/icons/X.svg?react"
import Icon from "./components/icon"
import Badge from "./components/badge"
import Button from "./components/button"

function App() {

  return (

    <div className="grid gap-3">
      <div>
        <Text as="p" variant="body-md-bold" className="text-pink-700">
          oi
        </Text>
        <Text as="p" variant="body-md-bold" className="text-gray-800">
          oi
        </Text>
        <Text as="p" variant="body-sm-bold" className="text-purple-400">
          oi
        </Text>
      </div>
      <div className="flex gap-1">    
          <Icon svg={TrashIcon} className="fill-pink-500"/>
          <Icon svg={CheckIcon}/>
          <Icon svg={PlusIcon}/>
          <Icon svg={SpinnerIcon} animate/>
          <Icon svg={PencilIcon}/>
          <Icon svg={XIcon}/>
      </div>

      <div>
        <Badge variant={"secondary"}>5</Badge>
        <Badge variant={"primary"}>2 de 5</Badge>
      </div>
      <div>
        <Button icon={PlusIcon}> nova tarefa    </Button>
      </div>
    </div>
  
  )
}

export default App
