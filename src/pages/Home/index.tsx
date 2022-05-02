import Form from "../../components/Form";
import List from "../../components/List";
import styles from './styles.module.scss'


export default function App() {


  return (
    <div className={styles.appStyle}>
      <Form />
      <List />
    </div>
  )
}
