import styles from './Button.module.scss'

type ButtonProps = {
  children: React.ReactNode
  type?: "button" | "submit" | "reset" | undefined
}

export default function Button({ children, type = 'button' }: ButtonProps) {
  return (

    <button className={styles.botao} type={type}>
      {children}
    </button>


  )
}
