import Task from "./Task"
import styles from './List.module.scss'


export default function List() {
  const tarefas = [{
    tarefa: 'React',
    tempo: '02:00:00'
  }, {
    tarefa: 'Node.js',
    tempo: '01:30:00'
  }, {
    tarefa: 'MongoDB',
    tempo: '01:25:00'
  }]
  return (
    <aside className={styles.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((tarefa, idx) => (
          <Task key={idx} taskName={tarefa.tarefa} taskTime={tarefa.tempo} />
        ))}
      </ul>
    </aside>
  )
}
