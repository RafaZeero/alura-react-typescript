import React, { useState } from "react";
import { TaskProps } from "../../types/Tasks";
import Button from "../Button";
import styles from './Form.module.scss'
import { v4 as uuidv4 } from 'uuid'


interface FormularioProps {
  setTask: React.Dispatch<React.SetStateAction<TaskProps[]>>
}

export default function Formulario({ setTask }: FormularioProps) {
  const [tarefa, setTarefa] = useState('')
  const [tempo, setTempo] = useState('00:00')

  const addTask = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    setTask(oldTasks =>
      [
        ...oldTasks,
        {
          tarefa,
          tempo,
          selected: false,
          completed: false,
          id: uuidv4()
        }
      ]
    )
    setTarefa('')
    setTempo('00:00')

  }

  return (
    <form className={styles.novaTarefa} onSubmit={(e) => addTask(e)}>
      <div className={styles.inputContainer}>
        <label htmlFor="tarefa" >Adicione um novo estudo</label>
        <input
          type="text"
          name='tarefa'
          id='tarefa'
          value={tarefa}
          onChange={e => setTarefa(e.target.value)}
          placeholder="o que vc quer estudar"
          required
        />

      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="tempo">tempo</label>
        <input
          type="time"
          step='1'
          name='tempo'
          id='tempo'
          max='01:30:000'
          required min='00:00:00'
          value={tempo}
          onChange={e => setTempo(e.target.value)}
        />

      </div>
      <Button type='submit'>Adicionar</Button>
    </form>
  )
}

