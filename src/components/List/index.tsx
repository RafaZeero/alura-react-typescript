import Task, { TaskProps } from "./Task"
import styles from './List.module.scss'
import { useState } from "react"


export default function List() {
  const [task, setTask] = useState([
    {
      tarefa: 'React',
      tempo: '02:00:00'
    }, {
      tarefa: 'Node.js',
      tempo: '01:30:00'
    }, {
      tarefa: 'MongoDB',
      tempo: '01:25:00'
    }])

  // const addTask = ({ tarefa, tempo }: TaskProps) => {
  //   setTask(prevTask=> [...prevTask, newTask])
  // }
  return (
    <aside className={styles.listaTarefas}>
      <h2 onClick={() => {
        setTask(prevTask => [...prevTask, { tarefa: 'Nextjs', tempo: '02:00:00' }])
      }}>Estudos do dia</h2>
      <ul>
        {task.map((tarefa, idx) => (
          <Task key={idx} {...tarefa} /> //DRY - Don't Repeat Yourself + SRP - Single Responsibility Principle
        ))}
      </ul>
    </aside>
  )
}
