import Button from "../Button";
import styles from './Form.module.scss'

export default function Form() {
  return (
    <form className={styles.novaTarefa}>
      <div className={styles.inputContainer}>
        <label htmlFor="tarefa" >Adicione um novo estudo</label>
        <input type="text" name='tarefa' id='tarefa' placeholder="o que vc quer estudar" required />

      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="tempo">tempo</label>
        <input type="time" step='1' name='tempo' id='tempo' max='01:30:000' required min='00:00:00' />

      </div>
      <Button>Adicionar</Button>
    </form>
  )
}
