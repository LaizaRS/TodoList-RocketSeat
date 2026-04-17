import { useLocalStorage } from "usehooks-ts";
import { TASKS_KEY, TaskState, type Task } from "../models/task";
import { delay } from "../helpers/utils";
import React from "react";

export default function useTasks() {
  const [tasksData] = useLocalStorage<Task[]>(TASKS_KEY, []);
  const [tasks, setTasks] = React.useState<Task[]>([])
  const [isLoadingTasks, setIsLoadingTasks] = React.useState(true)

 async function fetchTasks() {
    if(isLoadingTasks) {
      await delay(900)
      setIsLoadingTasks(false)
    }
     setTasks(tasksData)
  }

  React.useEffect(() => {
    fetchTasks();
  }, [tasksData]);
   
  return {
    tasks,
    createdTasksCount: tasks.filter((task) => task.state === TaskState.Crated).length,
    concludedTasksCount: tasks.filter((task) => task.concluded).length,
    isLoadingTasks,
  }
}