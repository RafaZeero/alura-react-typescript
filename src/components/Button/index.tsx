import styles from './Button.module.scss'

type ButtonProps = {
  children: React.ReactNode
  type?: "button" | "submit" | "reset" | undefined
  onClick?: () => void
}

export default function Button({ children, type = 'button', onClick }: ButtonProps) {
  return (

    <button
      onClick={onClick}
      className={styles.botao}
      type={type}
    >
      {children}
    </button>


  )
}
