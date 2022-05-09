import { TaskProps } from '../../../types/Tasks'
import styles from './Task.module.scss'

interface SingleTaskProps extends TaskProps {
  selectTask: (selectedTask: TaskProps) => void
}

export default function Task({
  tarefa,
  tempo,
  selected,
  completado,
  id,
  selectTask
}: SingleTaskProps) {

  return (
    <li
      className={`${styles.item} ${selected ? styles.itemSelecionado : ''}`}
      onClick={() => selectTask({
        tarefa,
        tempo,
        selected,
        completado,
        id
      })}>
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
    </li>
  )
}
