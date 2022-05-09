import { useState } from "react";
import Form from "../../components/Form";
import List from "../../components/List";
import Timer from "../../components/Timer";
import { TaskProps } from "../../types/Tasks";
import styles from './Home.module.scss'


export default function App() {
  const [task, setTask] = useState<TaskProps[]>([])
  const [selected, setSelected] = useState<TaskProps>()

  const selectTask = (selectedTask: TaskProps) => {
    setSelected(selectedTask)
    setTask(oldTasks => oldTasks.map(tasks => ({
      ...tasks,
      selected: tasks.id === selectedTask.id ? true : false

    })))
  }

  return (
    <div className={styles.appStyle}>
      <Form setTask={setTask} />
      <List
        tasks={task}
        selectTask={selectTask}
      />
      <Timer selected={selected} />
    </div>
  )
}

