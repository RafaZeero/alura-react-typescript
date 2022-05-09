import Task from "./Task"
import styles from './List.module.scss'
import { TaskProps } from "../../types/Tasks"


export default function List({ tasks }: { tasks: TaskProps[] }) {


  // const addTask = ({ tarefa, tempo }: TaskProps) => {
  //   setTask(prevTask=> [...prevTask, newTask])
  // }
  return (
    <aside className={styles.listaTarefas}>
      <h2 >Estudos do dia</h2>
      <ul>
        {tasks.map((tarefa, idx) => (
          <Task key={idx} {...tarefa} /> //DRY - Don't Repeat Yourself + SRP - Single Responsibility Principle
        ))}
      </ul>
    </aside>
  )
}
