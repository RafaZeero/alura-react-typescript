import Button from "../Button";
import Clock from "./Clock";
import styles from './Timer.module.scss'

export default function index() {
  return (
    <div className={styles.cronometro}>
      <p className={styles.titulo}>Escolha um card e inicie o cronômetro</p>
      <div className={styles.relogioWrapper}>
        <Clock />
      </div>
      <Button children={'Começar!'} />
    </div>
  )
}
