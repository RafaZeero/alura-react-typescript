
interface TaskProps {
  taskName: string
  taskTime: string
}

export default function Task({ taskName, taskTime }: TaskProps) {

  return (
    <li>
      <h3>{taskName}</h3>
      <span>{taskTime}</span>
    </li>
  )
}
