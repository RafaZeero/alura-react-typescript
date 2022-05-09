import { TaskProps } from '../../types/Tasks'
import styles from './List.module.scss'



export default function Task({ tarefa, tempo }: TaskProps) {

  return (
    <li className={styles.item}>
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
    </li>
  )
}
