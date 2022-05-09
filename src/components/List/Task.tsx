import styles from './List.module.scss'

export interface TaskProps {
  tarefa: string
  tempo: string
}

export default function Task({ tarefa, tempo }: TaskProps) {

  return (
    <li className={styles.item}>
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
    </li>
  )
}
