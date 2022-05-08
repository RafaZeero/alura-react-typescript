import Form from "../../components/Form";
import List from "../../components/List";
import Timer from "../../components/Timer";
import styles from './Home.module.scss'


export default function App() {


  return (
    <div className={styles.appStyle}>
      <Form />
      <List />
      <Timer />
    </div>
  )
}

