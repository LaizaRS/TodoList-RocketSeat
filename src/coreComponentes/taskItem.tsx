import React from "react";
import ButtonIcon from "../components/buttonIcon";
import Card from "../components/card";
import InputCheackBox from "../components/inputCheckBox";
import Text from "../components/text";
import TrashIcon from "../assets/icons/Trash.svg?react"
import PencilIcon from "../assets/icons/Pencil.svg?react"
import XIcon from "../assets/icons/X.svg?react"
import CheckIcon from "../assets/icons/Check.svg?react"
import InputText from "../components/inputText";

export default function TaskItem () {
  const [isEditing, setIsEdidting] = React.useState(false)

  function handleEditTask () {
    setIsEdidting(true)
  }

  function handeleExitEditTask() {
    setIsEdidting(false)
  }


  return <Card size="md" className="flex items-center gap-4">
    {!isEditing ? 
    <>
     <InputCheackBox/>
    <Text className="flex-1"> Fazer compras da semana</Text>
    <div className="flex gap-1">
      <ButtonIcon icon={TrashIcon} variant="tertiary"/>
      <ButtonIcon icon={PencilIcon} variant="tertiary" onClick={handleEditTask}/>
    </div>
    </> : <>
    <InputText  className="flex-1" />
    <div className="flex gap-1">
      <ButtonIcon icon={XIcon} variant="secondary" onClick={handeleExitEditTask}/>
      <ButtonIcon icon={CheckIcon} variant="primary"/>
    </div>
    </>
    }
    
  </Card>
}