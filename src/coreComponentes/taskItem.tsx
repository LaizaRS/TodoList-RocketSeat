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
import { TaskState, type Task } from "../models/task";
import { cx } from "class-variance-authority";
import useTask from "../hooks/useTask";
import Skeleton from "../components/skeleton";

interface TaskItemProps {
  task: Task;
  loading?: boolean 
}


export default function TaskItem ({task, loading}: TaskItemProps) {
  const [isEditing, setIsEdidting] = React.useState(
    task?.state === TaskState.Creating
  );

  const [taslTitle, setTaskTitle] = React.useState(task.title || '')
  const { 
    updateTask, 
    UpdateTaskStatus, 
    deleteTask, 
    isUpdatingTask, 
    isDeletingTask 
  } = useTask()

  function handleEditTask () {
    setIsEdidting(true)
  }

  function handleExitEditTask() {
      if(task.state === TaskState.Creating) {
        deleteTask(task.id)
      }
    setIsEdidting(false)
  }

  function handleChangeTaskTitle(e: React.ChangeEvent<HTMLInputElement>) {
    setTaskTitle(e.target.value || "")
  }

  async function handleSaveTask(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    
    await updateTask(task.id, {title: taslTitle})

    setIsEdidting(false)
  }

  function handleChangeTaskStatus(e: React.ChangeEvent<HTMLInputElement>) {
    const checked = e.target.checked

    UpdateTaskStatus(task.id, checked)
  }

  async function handleDeleteTask() {
    await deleteTask(task.id)
  }

  return <form onSubmit={handleSaveTask}> 
  <Card size="md" className="flex items-center gap-4">
    {!isEditing ? 
    <>
     <InputCheackBox 
      checked={task?.concluded} 
      onChange={handleChangeTaskStatus}
      loading={loading}
     />
    {!loading ? <Text className={cx("flex-1", {
      "line-through" : task?.concluded, 
      })}
    >
      {task?.title}
    </Text> : 
     <Skeleton className="flex-1 h-6" />
    }
    <div className="flex gap-1">
      <ButtonIcon 
        type="button"
        icon={TrashIcon} 
        variant="tertiary"
        onClick={handleDeleteTask}
        loading={loading}
      />
      <ButtonIcon 
        type="button"
        icon={PencilIcon}
        variant="tertiary" 
        onClick={handleEditTask}
        loading={loading}
        handling={isDeletingTask}
      />
    </div>
    </> : <>
    <InputText  
      value={taslTitle}
      className="flex-1"  
      onChange={handleChangeTaskTitle} 
      required 
      autoFocus
    />
    <div className="flex gap-1">
      <ButtonIcon 
        type="button"
        icon={XIcon} 
        variant="secondary" 
        onClick={handleExitEditTask}
      />
      <ButtonIcon 
        type="submit" 
        icon={CheckIcon} 
        variant="primary"
        handling={isUpdatingTask}
      />
    </div>
    </>
    }
    
  </Card>
  </form>
}