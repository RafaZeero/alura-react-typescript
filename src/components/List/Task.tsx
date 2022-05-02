import styles from './List.module.scss'

interface TaskProps {
  taskName: string
  taskTime: string
}

export default function Task({ taskName, taskTime }: TaskProps) {

  return (
    <li className={styles.item}>
      <h3>{taskName}</h3>
      <span>{taskTime}</span>
    </li>
  )
}
