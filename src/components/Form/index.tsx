import Button from "../Button";

export default function Form() {
  return (
    <form >
      <div>
        <label htmlFor="tarefa" >Adicione um novo estudo</label>
        <input type="text" name='tarefa' id='tarefa' placeholder="o que vc quer estudar" required />

      </div>
      <div>
        <label htmlFor="tempo">tempo</label>
        <input type="time" step='1' name='tempo' id='tempo' max='01:30:000' required min='00:00:00' />

      </div>
      <Button />
    </form>
  )
}
