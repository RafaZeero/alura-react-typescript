import { useEffect, useState } from "react";
import { timeToSeconds } from "../../common/utils/time";
import { TaskProps } from "../../types/Tasks";
import Button from "../Button";
import Clock from "./Clock";
import styles from './Timer.module.scss'

interface TimerProps {
  selected: TaskProps | undefined
}

export default function index({ selected }: TimerProps) {
  const [timeOut, setTimeOut] = useState<number>()

  useEffect(() => {
    if (selected?.tempo) setTimeOut(timeToSeconds(selected.tempo))

  }, [selected])

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
