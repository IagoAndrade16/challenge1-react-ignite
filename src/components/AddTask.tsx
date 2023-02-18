import styles from "./AddTask.module.css";

export function AddTask() {
  return (
    <div className={styles.addTaskDiv}>
      <input className={styles.addTaskInput} type="text" placeholder="Adicione uma nova tarefa"/>
      <button className={styles.addTaskButton}>Criar +</button>
    </div>
  )
}