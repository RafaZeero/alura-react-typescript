import { TaskProps } from '../../../types/Tasks'
import styles from './Task.module.scss'

interface SingleTaskProps extends TaskProps {
  selectTask: (selectedTask: TaskProps) => void
}

export default function Task({
  tarefa,
  tempo,
  selected,
  completed,
  id,
  selectTask
}: SingleTaskProps) {

  return (
    <li
      className={`${styles.item} ${selected ? styles.itemSelecionado : ''} ${completed ? styles.itemCompletado : ''}`}
      onClick={() => !completed && selectTask({
        tarefa,
        tempo,
        selected,
        completed,
        id
      })}>
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
      {completed && <span className={styles.concluido} aria-label="Tarefa completada"></span>}
    </li>
  )
}
