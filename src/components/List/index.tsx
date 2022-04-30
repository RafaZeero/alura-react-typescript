import Task from "./Task"


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
    <aside>
      <h2>Estudos do dia</h2>
      {tarefas.map((tarefa, idx) => (
        <ul key={idx} >
          <Task taskName={tarefa.tarefa} taskTime={tarefa.tempo} />
        </ul>
      ))}
    </aside>
  )
}
