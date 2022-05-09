import { useEffect, useState } from "react";
import { timeToSeconds } from "../../common/utils/time";
import { TaskProps } from "../../types/Tasks";
import Button from "../Button";
import Clock from "./Clock";
import styles from './Timer.module.scss'

interface TimerProps {
  selected: TaskProps | undefined
  finishTask: () => void
}

export default function Timer({ selected, finishTask }: TimerProps) {
  const [countdown, setCountdown] = useState<number>()

  useEffect(() => {
    if (selected?.tempo) setCountdown(timeToSeconds(selected.tempo))

  }, [selected])

  const countdownClockFunction = (time: number = 0) => {
    setTimeout(() => {
      if (time > 0) {
        setCountdown(time - 1)
        return countdownClockFunction(time - 1)
      }
      finishTask()
    }, 1 * 1000)
  }

  return (
    <div className={styles.cronometro}>
      <p className={styles.titulo}>Escolha um card e inicie o cronômetro</p>
      <div className={styles.relogioWrapper}>
        <Clock countdown={countdown} />
      </div>
      <Button onClick={() => countdownClockFunction(countdown)} children={'Começar!'} />
    </div>
  )
}
