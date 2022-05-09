import Task from "./Task"
import styles from './List.module.scss'
import { TaskProps } from "../../types/Tasks"

export interface ListProps {
  tasks: TaskProps[],
  selectTask: (selectedTask: TaskProps) => void
}

export default function List({ tasks, selectTask }: ListProps) {


  // const addTask = ({ tarefa, tempo }: TaskProps) => {
  //   setTask(prevTask=> [...prevTask, newTask])
  // }
  return (
    <aside className={styles.listaTarefas}>
      <h2 >Estudos do dia</h2>
      <ul>
        {tasks.map((tarefa) => (
          <Task selectTask={selectTask} key={tarefa.id} {...tarefa} /> //DRY - Don't Repeat Yourself + SRP - Single Responsibility Principle
        ))}
      </ul>
    </aside>
  )
}
