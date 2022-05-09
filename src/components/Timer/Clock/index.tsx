import styles from './Clock.module.scss'


interface ClockProps {
  countdown: number | undefined
}

export default function Clock({ countdown = 0 }: ClockProps) {

  const minutes = Math.floor(countdown / 60)
  const seconds = countdown % 60

  const [minuteDozens, minuteUnits] = String(minutes).padStart(2, '0')
  const [secondDozens, secondUnits] = String(seconds).padStart(2, '0')

  return (
    <>
      <span className={styles.relogioNumero}>{minuteDozens}</span>
      <span className={styles.relogioNumero}>{minuteUnits}</span>
      <span className={styles.relogioDivisao}>:</span>
      <span className={styles.relogioNumero}>{secondDozens}</span>
      <span className={styles.relogioNumero}>{secondUnits}</span>
    </>
  )
}
