import React from "react";
import { TaskProps } from "../../types/Tasks";
import Button from "../Button";
import styles from './Form.module.scss'
import { v4 as uuidv4 } from 'uuid'



export default class Formulario extends React.Component<{
  setTask: React.Dispatch<React.SetStateAction<TaskProps[]>>
}> {
  state = {
    tarefa: "",
    tempo: "00:00"
  }

  addTask(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    this.props.setTask(tarefasAntigas =>
      [
        ...tarefasAntigas,
        {
          ...this.state,
          selected: false,
          completado: false,
          id: uuidv4()
        }
      ]
    )
    this.setState({
      tarefa: "",
      tempo: "00:00"
    })
  }

  render() {


    return (
      <form className={styles.novaTarefa} onSubmit={(e) => this.addTask(e)}>
        <div className={styles.inputContainer}>
          <label htmlFor="tarefa" >Adicione um novo estudo</label>
          <input
            type="text"
            name='tarefa'
            id='tarefa'
            value={this.state.tarefa}
            onChange={e => this.setState({ ...this.state, tarefa: e.target.value })}
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
            value={this.state.tempo}
            onChange={e => this.setState({ ...this.state, tempo: e.target.value })}
          />

        </div>
        <Button type='submit'>Adicionar</Button>
      </form>
    )
  }
}
