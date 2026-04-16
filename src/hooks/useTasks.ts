import { useLocalStorage } from "usehooks-ts";
import { TASKS_KEY, TaskState, type Task } from "../models/task";

export default function useTasks() {
  const [tasks] = useLocalStorage<Task[]>(TASKS_KEY, []);
   
  return {
    tasks,
    createdTasksCount: tasks.filter((task) => task.state === TaskState.Crated).length,
    concludedTasksCount: tasks.filter((task) => task.concluded).length
  }
}